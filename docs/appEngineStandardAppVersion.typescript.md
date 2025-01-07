# `appEngineStandardAppVersion` Submodule <a name="`appEngineStandardAppVersion` Submodule" id="@cdktf/provider-google.appEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineStandardAppVersion <a name="AppEngineStandardAppVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersion(scope: Construct, id: string, config: AppEngineStandardAppVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling">putAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling">putBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint">putEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers">putHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries">putLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling">putManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector">putVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis">resetAppEngineApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling">resetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling">resetBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy">resetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers">resetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices">resetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries">resetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling">resetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy">resetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion">resetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe">resetThreadsafe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector">resetVpcAccessConnector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomaticScaling` <a name="putAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling"></a>

```typescript
public putAutomaticScaling(value: AppEngineStandardAppVersionAutomaticScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `putBasicScaling` <a name="putBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling"></a>

```typescript
public putBasicScaling(value: AppEngineStandardAppVersionBasicScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment"></a>

```typescript
public putDeployment(value: AppEngineStandardAppVersionDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `putEntrypoint` <a name="putEntrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint"></a>

```typescript
public putEntrypoint(value: AppEngineStandardAppVersionEntrypoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `putHandlers` <a name="putHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers"></a>

```typescript
public putHandlers(value: IResolvable | AppEngineStandardAppVersionHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---

##### `putLibraries` <a name="putLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries"></a>

```typescript
public putLibraries(value: IResolvable | AppEngineStandardAppVersionLibraries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---

##### `putManualScaling` <a name="putManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling"></a>

```typescript
public putManualScaling(value: AppEngineStandardAppVersionManualScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineStandardAppVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---

##### `putVpcAccessConnector` <a name="putVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector"></a>

```typescript
public putVpcAccessConnector(value: AppEngineStandardAppVersionVpcAccessConnector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `resetAppEngineApis` <a name="resetAppEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis"></a>

```typescript
public resetAppEngineApis(): void
```

##### `resetAutomaticScaling` <a name="resetAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling"></a>

```typescript
public resetAutomaticScaling(): void
```

##### `resetBasicScaling` <a name="resetBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling"></a>

```typescript
public resetBasicScaling(): void
```

##### `resetDeleteServiceOnDestroy` <a name="resetDeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```typescript
public resetDeleteServiceOnDestroy(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetHandlers` <a name="resetHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers"></a>

```typescript
public resetHandlers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundServices` <a name="resetInboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices"></a>

```typescript
public resetInboundServices(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetLibraries` <a name="resetLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries"></a>

```typescript
public resetLibraries(): void
```

##### `resetManualScaling` <a name="resetManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling"></a>

```typescript
public resetManualScaling(): void
```

##### `resetNoopOnDestroy` <a name="resetNoopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```typescript
public resetNoopOnDestroy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuntimeApiVersion` <a name="resetRuntimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```typescript
public resetRuntimeApiVersion(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetThreadsafe` <a name="resetThreadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe"></a>

```typescript
public resetThreadsafe(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetVpcAccessConnector` <a name="resetVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```typescript
public resetVpcAccessConnector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineStandardAppVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling">basicScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries">libraries</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput">appEngineApisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput">automaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput">basicScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">deleteServiceOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput">entrypointInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput">handlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput">inboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput">librariesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput">manualScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput">noopOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput">runtimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput">threadsafeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput">vpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis">appEngineApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe">threadsafe</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automaticScaling`<sup>Required</sup> <a name="automaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: AppEngineStandardAppVersionAutomaticScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `basicScaling`<sup>Required</sup> <a name="basicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling"></a>

```typescript
public readonly basicScaling: AppEngineStandardAppVersionBasicScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment"></a>

```typescript
public readonly deployment: AppEngineStandardAppVersionDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint"></a>

```typescript
public readonly entrypoint: AppEngineStandardAppVersionEntrypointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers"></a>

```typescript
public readonly handlers: AppEngineStandardAppVersionHandlersList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a>

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries"></a>

```typescript
public readonly libraries: AppEngineStandardAppVersionLibrariesList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a>

---

##### `manualScaling`<sup>Required</sup> <a name="manualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling"></a>

```typescript
public readonly manualScaling: AppEngineStandardAppVersionManualScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineStandardAppVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `vpcAccessConnector`<sup>Required</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: AppEngineStandardAppVersionVpcAccessConnectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `appEngineApisInput`<sup>Optional</sup> <a name="appEngineApisInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput"></a>

```typescript
public readonly appEngineApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticScalingInput`<sup>Optional</sup> <a name="automaticScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput"></a>

```typescript
public readonly automaticScalingInput: AppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `basicScalingInput`<sup>Optional</sup> <a name="basicScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput"></a>

```typescript
public readonly basicScalingInput: AppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `deleteServiceOnDestroyInput`<sup>Optional</sup> <a name="deleteServiceOnDestroyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```typescript
public readonly deleteServiceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: AppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: AppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `handlersInput`<sup>Optional</sup> <a name="handlersInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput"></a>

```typescript
public readonly handlersInput: IResolvable | AppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundServicesInput`<sup>Optional</sup> <a name="inboundServicesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput"></a>

```typescript
public readonly inboundServicesInput: string[];
```

- *Type:* string[]

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `librariesInput`<sup>Optional</sup> <a name="librariesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput"></a>

```typescript
public readonly librariesInput: IResolvable | AppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---

##### `manualScalingInput`<sup>Optional</sup> <a name="manualScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput"></a>

```typescript
public readonly manualScalingInput: AppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `noopOnDestroyInput`<sup>Optional</sup> <a name="noopOnDestroyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```typescript
public readonly noopOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeApiVersionInput`<sup>Optional</sup> <a name="runtimeApiVersionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```typescript
public readonly runtimeApiVersionInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `threadsafeInput`<sup>Optional</sup> <a name="threadsafeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput"></a>

```typescript
public readonly threadsafeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineStandardAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `vpcAccessConnectorInput`<sup>Optional</sup> <a name="vpcAccessConnectorInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```typescript
public readonly vpcAccessConnectorInput: AppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `appEngineApis`<sup>Required</sup> <a name="appEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis"></a>

```typescript
public readonly appEngineApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteServiceOnDestroy`<sup>Required</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboundServices`<sup>Required</sup> <a name="inboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `noopOnDestroy`<sup>Required</sup> <a name="noopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `runtimeApiVersion`<sup>Required</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `threadsafe`<sup>Required</sup> <a name="threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe"></a>

```typescript
public readonly threadsafe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineStandardAppVersionAutomaticScaling <a name="AppEngineStandardAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionAutomaticScaling: appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">standardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}

---

##### `maxIdleInstances`<sup>Optional</sup> <a name="maxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}

---

##### `maxPendingLatency`<sup>Optional</sup> <a name="maxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}

---

##### `minPendingLatency`<sup>Optional</sup> <a name="minPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}

---

##### `standardSchedulerSettings`<sup>Optional</sup> <a name="standardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```typescript
public readonly standardSchedulerSettings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}

---

### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings: appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">maxInstances</a></code> | <code>number</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">minInstances</a></code> | <code>number</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">targetThroughputUtilization</a></code> | <code>number</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#min_instances AppEngineStandardAppVersion#min_instances}

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}

---

##### `targetThroughputUtilization`<sup>Optional</sup> <a name="targetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```typescript
public readonly targetThroughputUtilization: number;
```

- *Type:* number

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}

---

### AppEngineStandardAppVersionBasicScaling <a name="AppEngineStandardAppVersionBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionBasicScaling: appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances">maxInstances</a></code> | <code>number</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#idle_timeout AppEngineStandardAppVersion#idle_timeout}

---

### AppEngineStandardAppVersionConfig <a name="AppEngineStandardAppVersionConfig" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionConfig: appEngineStandardAppVersion.AppEngineStandardAppVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime">runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service">service</a></code> | <code>string</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis">appEngineApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling">basicScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers">handlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries">libraries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | libraries block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe">threadsafe</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment"></a>

```typescript
public readonly deployment: AppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#deployment AppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: AppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#entrypoint AppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#runtime AppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#service AppEngineStandardAppVersion#service}

---

##### `appEngineApis`<sup>Optional</sup> <a name="appEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```typescript
public readonly appEngineApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#app_engine_apis AppEngineStandardAppVersion#app_engine_apis}

---

##### `automaticScaling`<sup>Optional</sup> <a name="automaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: AppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}

---

##### `basicScaling`<sup>Optional</sup> <a name="basicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling"></a>

```typescript
public readonly basicScaling: AppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#basic_scaling AppEngineStandardAppVersion#basic_scaling}

---

##### `deleteServiceOnDestroy`<sup>Optional</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#env_variables AppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers"></a>

```typescript
public readonly handlers: IResolvable | AppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#handlers AppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundServices`<sup>Optional</sup> <a name="inboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#inbound_services AppEngineStandardAppVersion#inbound_services}

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#instance_class AppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries"></a>

```typescript
public readonly libraries: IResolvable | AppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#libraries AppEngineStandardAppVersion#libraries}

---

##### `manualScaling`<sup>Optional</sup> <a name="manualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling"></a>

```typescript
public readonly manualScaling: AppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#manual_scaling AppEngineStandardAppVersion#manual_scaling}

---

##### `noopOnDestroy`<sup>Optional</sup> <a name="noopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}.

---

##### `runtimeApiVersion`<sup>Optional</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#service_account AppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe"></a>

```typescript
public readonly threadsafe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#threadsafe AppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineStandardAppVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#timeouts AppEngineStandardAppVersion#timeouts}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#version_id AppEngineStandardAppVersion#version_id}

---

##### `vpcAccessConnector`<sup>Optional</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: AppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}

---

### AppEngineStandardAppVersionDeployment <a name="AppEngineStandardAppVersionDeployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionDeployment: appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files">files</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files"></a>

```typescript
public readonly files: IResolvable | AppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#files AppEngineStandardAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip"></a>

```typescript
public readonly zip: AppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#zip AppEngineStandardAppVersion#zip}

---

### AppEngineStandardAppVersionDeploymentFiles <a name="AppEngineStandardAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionDeploymentFiles: appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}.

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `sha1Sum`<sup>Optional</sup> <a name="sha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#sha1_sum AppEngineStandardAppVersion#sha1_sum}

---

### AppEngineStandardAppVersionDeploymentZip <a name="AppEngineStandardAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionDeploymentZip: appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount">filesCount</a></code> | <code>number</code> | files count. |

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `filesCount`<sup>Optional</sup> <a name="filesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#files_count AppEngineStandardAppVersion#files_count}

---

### AppEngineStandardAppVersionEntrypoint <a name="AppEngineStandardAppVersionEntrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionEntrypoint: appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell">shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#shell AppEngineStandardAppVersion#shell}

---

### AppEngineStandardAppVersionHandlers <a name="AppEngineStandardAppVersionHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionHandlers: appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction">authFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login">login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex">urlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#auth_fail_action AppEngineStandardAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#login AppEngineStandardAppVersion#login}

---

##### `redirectHttpResponseCode`<sup>Optional</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#redirect_http_response_code AppEngineStandardAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script"></a>

```typescript
public readonly script: AppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#script AppEngineStandardAppVersion#script}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#security_level AppEngineStandardAppVersion#security_level}

---

##### `staticFiles`<sup>Optional</sup> <a name="staticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```typescript
public readonly staticFiles: AppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#static_files AppEngineStandardAppVersion#static_files}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#url_regex AppEngineStandardAppVersion#url_regex}

---

### AppEngineStandardAppVersionHandlersScript <a name="AppEngineStandardAppVersionHandlersScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionHandlersScript: appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath">scriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#script_path AppEngineStandardAppVersion#script_path}

---

### AppEngineStandardAppVersionHandlersStaticFiles <a name="AppEngineStandardAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionHandlersStaticFiles: appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">mimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `applicationReadable`<sup>Optional</sup> <a name="applicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#application_readable AppEngineStandardAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#expiration AppEngineStandardAppVersion#expiration}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#http_headers AppEngineStandardAppVersion#http_headers}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#mime_type AppEngineStandardAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#path AppEngineStandardAppVersion#path}

---

##### `requireMatchingFile`<sup>Optional</sup> <a name="requireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#require_matching_file AppEngineStandardAppVersion#require_matching_file}

---

##### `uploadPathRegex`<sup>Optional</sup> <a name="uploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}

---

### AppEngineStandardAppVersionLibraries <a name="AppEngineStandardAppVersionLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionLibraries: appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name">name</a></code> | <code>string</code> | Name of the library. Example "django". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version">version</a></code> | <code>string</code> | Version of the library to select, or "latest". |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#version AppEngineStandardAppVersion#version}

---

### AppEngineStandardAppVersionManualScaling <a name="AppEngineStandardAppVersionManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionManualScaling: appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances">instances</a></code> | <code>number</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#instances AppEngineStandardAppVersion#instances}

---

### AppEngineStandardAppVersionTimeouts <a name="AppEngineStandardAppVersionTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionTimeouts: appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}.

---

### AppEngineStandardAppVersionVpcAccessConnector <a name="AppEngineStandardAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

const appEngineStandardAppVersionVpcAccessConnector: appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name">name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">egressSetting</a></code> | <code>string</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `egressSetting`<sup>Optional</sup> <a name="egressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```typescript
public readonly egressSetting: string;
```

- *Type:* string

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/app_engine_standard_app_version#egress_setting AppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineStandardAppVersionAutomaticScalingOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">putStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">resetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">resetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">resetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">resetStandardSchedulerSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSchedulerSettings` <a name="putStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```typescript
public putStandardSchedulerSettings(value: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxIdleInstances` <a name="resetMaxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```typescript
public resetMaxIdleInstances(): void
```

##### `resetMaxPendingLatency` <a name="resetMaxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```typescript
public resetMaxPendingLatency(): void
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```typescript
public resetMinIdleInstances(): void
```

##### `resetMinPendingLatency` <a name="resetMinPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```typescript
public resetMinPendingLatency(): void
```

##### `resetStandardSchedulerSettings` <a name="resetStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```typescript
public resetStandardSchedulerSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">standardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">maxIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">maxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">minPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">standardSchedulerSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardSchedulerSettings`<sup>Required</sup> <a name="standardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```typescript
public readonly standardSchedulerSettings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxIdleInstancesInput`<sup>Optional</sup> <a name="maxIdleInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```typescript
public readonly maxIdleInstancesInput: number;
```

- *Type:* number

---

##### `maxPendingLatencyInput`<sup>Optional</sup> <a name="maxPendingLatencyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```typescript
public readonly maxPendingLatencyInput: string;
```

- *Type:* string

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```typescript
public readonly minIdleInstancesInput: number;
```

- *Type:* number

---

##### `minPendingLatencyInput`<sup>Optional</sup> <a name="minPendingLatencyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```typescript
public readonly minPendingLatencyInput: string;
```

- *Type:* string

---

##### `standardSchedulerSettingsInput`<sup>Optional</sup> <a name="standardSchedulerSettingsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```typescript
public readonly standardSchedulerSettingsInput: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxIdleInstances`<sup>Required</sup> <a name="maxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

---

##### `maxPendingLatency`<sup>Required</sup> <a name="maxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

---

##### `minPendingLatency`<sup>Required</sup> <a name="minPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---


### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">resetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">resetTargetThroughputUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```typescript
public resetMaxInstances(): void
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```typescript
public resetMinInstances(): void
```

##### `resetTargetCpuUtilization` <a name="resetTargetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```typescript
public resetTargetCpuUtilization(): void
```

##### `resetTargetThroughputUtilization` <a name="resetTargetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```typescript
public resetTargetThroughputUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">targetCpuUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">targetThroughputUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">targetThroughputUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```typescript
public readonly minInstancesInput: number;
```

- *Type:* number

---

##### `targetCpuUtilizationInput`<sup>Optional</sup> <a name="targetCpuUtilizationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```typescript
public readonly targetCpuUtilizationInput: number;
```

- *Type:* number

---

##### `targetThroughputUtilizationInput`<sup>Optional</sup> <a name="targetThroughputUtilizationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```typescript
public readonly targetThroughputUtilizationInput: number;
```

- *Type:* number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `targetCpuUtilization`<sup>Required</sup> <a name="targetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

---

##### `targetThroughputUtilization`<sup>Required</sup> <a name="targetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```typescript
public readonly targetThroughputUtilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### AppEngineStandardAppVersionBasicScalingOutputReference <a name="AppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: string;
```

- *Type:* string

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---


### AppEngineStandardAppVersionDeploymentFilesList <a name="AppEngineStandardAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get"></a>

```typescript
public get(index: number): AppEngineStandardAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---


### AppEngineStandardAppVersionDeploymentFilesOutputReference <a name="AppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">resetSha1Sum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha1Sum` <a name="resetSha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```typescript
public resetSha1Sum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sha1SumInput`<sup>Optional</sup> <a name="sha1SumInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```typescript
public readonly sha1SumInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sha1Sum`<sup>Required</sup> <a name="sha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionDeploymentFiles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>

---


### AppEngineStandardAppVersionDeploymentOutputReference <a name="AppEngineStandardAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip">putZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles">resetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip">resetZip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiles` <a name="putFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```typescript
public putFiles(value: IResolvable | AppEngineStandardAppVersionDeploymentFiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `putZip` <a name="putZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```typescript
public putZip(value: AppEngineStandardAppVersionDeploymentZip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `resetFiles` <a name="resetFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```typescript
public resetFiles(): void
```

##### `resetZip` <a name="resetZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```typescript
public resetZip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">filesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">zipInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```typescript
public readonly files: AppEngineStandardAppVersionDeploymentFilesList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```typescript
public readonly zip: AppEngineStandardAppVersionDeploymentZipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: IResolvable | AppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `zipInput`<sup>Optional</sup> <a name="zipInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```typescript
public readonly zipInput: AppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---


### AppEngineStandardAppVersionDeploymentZipOutputReference <a name="AppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">resetFilesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilesCount` <a name="resetFilesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```typescript
public resetFilesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">filesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">filesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesCountInput`<sup>Optional</sup> <a name="filesCountInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```typescript
public readonly filesCountInput: number;
```

- *Type:* number

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `filesCount`<sup>Required</sup> <a name="filesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---


### AppEngineStandardAppVersionEntrypointOutputReference <a name="AppEngineStandardAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">shellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```typescript
public readonly shellInput: string;
```

- *Type:* string

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---


### AppEngineStandardAppVersionHandlersList <a name="AppEngineStandardAppVersionHandlersList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get"></a>

```typescript
public get(index: number): AppEngineStandardAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---


### AppEngineStandardAppVersionHandlersOutputReference <a name="AppEngineStandardAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript">putScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">putStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">resetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">resetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScript` <a name="putScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```typescript
public putScript(value: AppEngineStandardAppVersionHandlersScript): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `putStaticFiles` <a name="putStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```typescript
public putStaticFiles(value: AppEngineStandardAppVersionHandlersStaticFiles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetRedirectHttpResponseCode` <a name="resetRedirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```typescript
public resetRedirectHttpResponseCode(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetStaticFiles` <a name="resetStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```typescript
public resetStaticFiles(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">scriptInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">staticFilesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```typescript
public readonly script: AppEngineStandardAppVersionHandlersScriptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `staticFiles`<sup>Required</sup> <a name="staticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```typescript
public readonly staticFiles: AppEngineStandardAppVersionHandlersStaticFilesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `redirectHttpResponseCodeInput`<sup>Optional</sup> <a name="redirectHttpResponseCodeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```typescript
public readonly redirectHttpResponseCodeInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: AppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `staticFilesInput`<sup>Optional</sup> <a name="staticFilesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```typescript
public readonly staticFilesInput: AppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `redirectHttpResponseCode`<sup>Required</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionHandlers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>

---


### AppEngineStandardAppVersionHandlersScriptOutputReference <a name="AppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">scriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```typescript
public readonly scriptPathInput: string;
```

- *Type:* string

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---


### AppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="AppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">resetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">resetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">resetUploadPathRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationReadable` <a name="resetApplicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```typescript
public resetApplicationReadable(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequireMatchingFile` <a name="resetRequireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```typescript
public resetRequireMatchingFile(): void
```

##### `resetUploadPathRegex` <a name="resetUploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```typescript
public resetUploadPathRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">applicationReadableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">requireMatchingFileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">uploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationReadableInput`<sup>Optional</sup> <a name="applicationReadableInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```typescript
public readonly applicationReadableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requireMatchingFileInput`<sup>Optional</sup> <a name="requireMatchingFileInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```typescript
public readonly requireMatchingFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegexInput`<sup>Optional</sup> <a name="uploadPathRegexInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```typescript
public readonly uploadPathRegexInput: string;
```

- *Type:* string

---

##### `applicationReadable`<sup>Required</sup> <a name="applicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requireMatchingFile`<sup>Required</sup> <a name="requireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegex`<sup>Required</sup> <a name="uploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---


### AppEngineStandardAppVersionLibrariesList <a name="AppEngineStandardAppVersionLibrariesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get"></a>

```typescript
public get(index: number): AppEngineStandardAppVersionLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---


### AppEngineStandardAppVersionLibrariesOutputReference <a name="AppEngineStandardAppVersionLibrariesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionLibraries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>

---


### AppEngineStandardAppVersionManualScalingOutputReference <a name="AppEngineStandardAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---


### AppEngineStandardAppVersionTimeoutsOutputReference <a name="AppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineStandardAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---


### AppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="AppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```typescript
import { appEngineStandardAppVersion } from '@cdktf/provider-google'

new appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">resetEgressSetting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressSetting` <a name="resetEgressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```typescript
public resetEgressSetting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">egressSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">egressSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egressSettingInput`<sup>Optional</sup> <a name="egressSettingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```typescript
public readonly egressSettingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `egressSetting`<sup>Required</sup> <a name="egressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```typescript
public readonly egressSetting: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---



