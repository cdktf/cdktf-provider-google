# `developerConnectConnection` Submodule <a name="`developerConnectConnection` Submodule" id="@cdktf/provider-google.developerConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectConnection <a name="DeveloperConnectConnection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnection(scope: Construct, id: string, config: DeveloperConnectConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig">DeveloperConnectConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig">DeveloperConnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig">putBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig">putBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig">putCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig">putGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig">putGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig">putGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig">putGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig">resetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig">resetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig">resetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig">resetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig">resetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig">resetGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBitbucketCloudConfig` <a name="putBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig"></a>

```typescript
public putBitbucketCloudConfig(value: DeveloperConnectConnectionBitbucketCloudConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `putBitbucketDataCenterConfig` <a name="putBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig"></a>

```typescript
public putBitbucketDataCenterConfig(value: DeveloperConnectConnectionBitbucketDataCenterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `putCryptoKeyConfig` <a name="putCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig"></a>

```typescript
public putCryptoKeyConfig(value: DeveloperConnectConnectionCryptoKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `putGithubConfig` <a name="putGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig"></a>

```typescript
public putGithubConfig(value: DeveloperConnectConnectionGithubConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---

##### `putGithubEnterpriseConfig` <a name="putGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```typescript
public putGithubEnterpriseConfig(value: DeveloperConnectConnectionGithubEnterpriseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `putGitlabConfig` <a name="putGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig"></a>

```typescript
public putGitlabConfig(value: DeveloperConnectConnectionGitlabConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---

##### `putGitlabEnterpriseConfig` <a name="putGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```typescript
public putGitlabEnterpriseConfig(value: DeveloperConnectConnectionGitlabEnterpriseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: DeveloperConnectConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBitbucketCloudConfig` <a name="resetBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig"></a>

```typescript
public resetBitbucketCloudConfig(): void
```

##### `resetBitbucketDataCenterConfig` <a name="resetBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig"></a>

```typescript
public resetBitbucketDataCenterConfig(): void
```

##### `resetCryptoKeyConfig` <a name="resetCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig"></a>

```typescript
public resetCryptoKeyConfig(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetGithubConfig` <a name="resetGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig"></a>

```typescript
public resetGithubConfig(): void
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```typescript
public resetGithubEnterpriseConfig(): void
```

##### `resetGitlabConfig` <a name="resetGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig"></a>

```typescript
public resetGitlabConfig(): void
```

##### `resetGitlabEnterpriseConfig` <a name="resetGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```typescript
public resetGitlabEnterpriseConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

developerConnectConnection.DeveloperConnectConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

developerConnectConnection.DeveloperConnectConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

developerConnectConnection.DeveloperConnectConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

developerConnectConnection.DeveloperConnectConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeveloperConnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig">bitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig">bitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig">gitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState">installationState</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput">bitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput">bitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput">cryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput">githubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput">gitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput">gitlabEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bitbucketCloudConfig`<sup>Required</sup> <a name="bitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig"></a>

```typescript
public readonly bitbucketCloudConfig: DeveloperConnectConnectionBitbucketCloudConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a>

---

##### `bitbucketDataCenterConfig`<sup>Required</sup> <a name="bitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig"></a>

```typescript
public readonly bitbucketDataCenterConfig: DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `cryptoKeyConfig`<sup>Required</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: DeveloperConnectConnectionCryptoKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `githubConfig`<sup>Required</sup> <a name="githubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig"></a>

```typescript
public readonly githubConfig: DeveloperConnectConnectionGithubConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: DeveloperConnectConnectionGithubEnterpriseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `gitlabConfig`<sup>Required</sup> <a name="gitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: DeveloperConnectConnectionGitlabConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `gitlabEnterpriseConfig`<sup>Required</sup> <a name="gitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```typescript
public readonly gitlabEnterpriseConfig: DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `installationState`<sup>Required</sup> <a name="installationState" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState"></a>

```typescript
public readonly installationState: DeveloperConnectConnectionInstallationStateList;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts"></a>

```typescript
public readonly timeouts: DeveloperConnectConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bitbucketCloudConfigInput`<sup>Optional</sup> <a name="bitbucketCloudConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput"></a>

```typescript
public readonly bitbucketCloudConfigInput: DeveloperConnectConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `bitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="bitbucketDataCenterConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput"></a>

```typescript
public readonly bitbucketDataCenterConfigInput: DeveloperConnectConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `cryptoKeyConfigInput`<sup>Optional</sup> <a name="cryptoKeyConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```typescript
public readonly cryptoKeyConfigInput: DeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `githubConfigInput`<sup>Optional</sup> <a name="githubConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput"></a>

```typescript
public readonly githubConfigInput: DeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```typescript
public readonly githubEnterpriseConfigInput: DeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `gitlabConfigInput`<sup>Optional</sup> <a name="gitlabConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput"></a>

```typescript
public readonly gitlabConfigInput: DeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---

##### `gitlabEnterpriseConfigInput`<sup>Optional</sup> <a name="gitlabEnterpriseConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```typescript
public readonly gitlabEnterpriseConfigInput: DeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DeveloperConnectConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectConnectionBitbucketCloudConfig <a name="DeveloperConnectConnectionBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketCloudConfig: developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace">workspace</a></code> | <code>string</code> | Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate and create webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#workspace DeveloperConnectConnection#workspace}

---

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketCloudConfigAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketCloudConfigReadAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketDataCenterConfig: developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketDataCenterConfigAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig: developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionConfig <a name="DeveloperConnectConnectionConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionConfig: developerConnectConnection.DeveloperConnectConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig">bitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig">bitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag">etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">gitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#connection_id DeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#location DeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#annotations DeveloperConnectConnection#annotations}

---

##### `bitbucketCloudConfig`<sup>Optional</sup> <a name="bitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig"></a>

```typescript
public readonly bitbucketCloudConfig: DeveloperConnectConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#bitbucket_cloud_config DeveloperConnectConnection#bitbucket_cloud_config}

---

##### `bitbucketDataCenterConfig`<sup>Optional</sup> <a name="bitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig"></a>

```typescript
public readonly bitbucketDataCenterConfig: DeveloperConnectConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#bitbucket_data_center_config DeveloperConnectConnection#bitbucket_data_center_config}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: DeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#crypto_key_config DeveloperConnectConnection#crypto_key_config}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#disabled DeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#etag DeveloperConnectConnection#etag}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig"></a>

```typescript
public readonly githubConfig: DeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#github_config DeveloperConnectConnection#github_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: DeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#github_enterprise_config DeveloperConnectConnection#github_enterprise_config}

---

##### `gitlabConfig`<sup>Optional</sup> <a name="gitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: DeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#gitlab_config DeveloperConnectConnection#gitlab_config}

---

##### `gitlabEnterpriseConfig`<sup>Optional</sup> <a name="gitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```typescript
public readonly gitlabEnterpriseConfig: DeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#gitlab_enterprise_config DeveloperConnectConnection#gitlab_enterprise_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#labels DeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DeveloperConnectConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#timeouts DeveloperConnectConnection#timeouts}

---

### DeveloperConnectConnectionCryptoKeyConfig <a name="DeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionCryptoKeyConfig: developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference">keyReference</a></code> | <code>string</code> | Required. |

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#key_reference DeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubConfig <a name="DeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGithubConfig: developerConnectConnection.DeveloperConnectConnectionGithubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp">githubApp</a></code> | <code>string</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```typescript
public readonly githubApp: string;
```

- *Type:* string

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#github_app DeveloperConnectConnection#github_app}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `authorizerCredential`<sup>Optional</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

### DeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGithubConfigAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#oauth_token_secret_version DeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGithubEnterpriseConfig: developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId">appId</a></code> | <code>string</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#app_id DeveloperConnectConnection#app_id}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `privateKeySecretVersion`<sup>Optional</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#private_key_secret_version DeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

##### `webhookSecretSecretVersion`<sup>Optional</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig: developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionGitlabConfig <a name="DeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabConfig: developerConnectConnection.DeveloperConnectConnectionGitlabConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabConfigAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabConfigReadAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabEnterpriseConfig: developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabEnterpriseConfigAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential: developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig: developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionInstallationState <a name="DeveloperConnectConnectionInstallationState" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionInstallationState: developerConnectConnection.DeveloperConnectConnectionInstallationState = { ... }
```


### DeveloperConnectConnectionTimeouts <a name="DeveloperConnectConnectionTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

const developerConnectConnectionTimeouts: developerConnectConnection.DeveloperConnectConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="DeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">keyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">keyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyReferenceInput`<sup>Optional</sup> <a name="keyReferenceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```typescript
public readonly keyReferenceInput: string;
```

- *Type:* string

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---


### DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauthTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersionInput`<sup>Optional</sup> <a name="oauthTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```typescript
public readonly oauthTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGithubConfigOutputReference <a name="DeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">resetAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: DeveloperConnectConnectionGithubConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetAuthorizerCredential` <a name="resetAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```typescript
public resetAuthorizerCredential(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">installationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">githubAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">githubApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `installationUri`<sup>Required</sup> <a name="installationUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```typescript
public readonly installationUri: string;
```

- *Type:* string

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: string;
```

- *Type:* string

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: DeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `githubAppInput`<sup>Optional</sup> <a name="githubAppInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```typescript
public readonly githubAppInput: string;
```

- *Type:* string

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```typescript
public readonly githubApp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">resetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">resetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetAppId` <a name="resetAppId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```typescript
public resetAppId(): void
```

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetPrivateKeySecretVersion` <a name="resetPrivateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```typescript
public resetPrivateKeySecretVersion(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```

##### `resetWebhookSecretSecretVersion` <a name="resetWebhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```typescript
public resetWebhookSecretSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">appSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">installationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">privateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSlug`<sup>Required</sup> <a name="appSlug" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```typescript
public readonly appSlug: string;
```

- *Type:* string

---

##### `installationUri`<sup>Required</sup> <a name="installationUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```typescript
public readonly installationUri: string;
```

- *Type:* string

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: string;
```

- *Type:* string

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `privateKeySecretVersionInput`<sup>Optional</sup> <a name="privateKeySecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```typescript
public readonly privateKeySecretVersionInput: string;
```

- *Type:* string

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `privateKeySecretVersion`<sup>Required</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabConfigOutputReference <a name="DeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: DeveloperConnectConnectionGitlabConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: DeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---


### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionInstallationStateList <a name="DeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionInstallationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get"></a>

```typescript
public get(index: number): DeveloperConnectConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DeveloperConnectConnectionInstallationStateOutputReference <a name="DeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">actionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionUri`<sup>Required</sup> <a name="actionUri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```typescript
public readonly actionUri: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeveloperConnectConnectionInstallationState;
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a>

---


### DeveloperConnectConnectionTimeoutsOutputReference <a name="DeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { developerConnectConnection } from '@cdktf/provider-google'

new developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeveloperConnectConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

---



