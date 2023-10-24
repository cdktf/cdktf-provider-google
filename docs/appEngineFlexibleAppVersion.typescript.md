# `google_app_engine_flexible_app_version`

Refer to the Terraform Registory for docs: [`google_app_engine_flexible_app_version`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version).

# `appEngineFlexibleAppVersion` Submodule <a name="`appEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google.appEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineFlexibleAppVersion <a name="AppEngineFlexibleAppVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion(scope: Construct, id: string, config: AppEngineFlexibleAppVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig">AppEngineFlexibleAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig">AppEngineFlexibleAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig">putApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling">putAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService">putEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint">putEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers">putHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck">putLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling">putManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck">putReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector">putVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig">resetApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling">resetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings">resetBetaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration">resetDefaultExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">resetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService">resetEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers">resetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices">resetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling">resetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex">resetNobuildFilesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy">resetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion">resetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel">resetRuntimeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">resetRuntimeMainExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus">resetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector">resetVpcAccessConnector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putApiConfig` <a name="putApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig"></a>

```typescript
public putApiConfig(value: AppEngineFlexibleAppVersionApiConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---

##### `putAutomaticScaling` <a name="putAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```typescript
public putAutomaticScaling(value: AppEngineFlexibleAppVersionAutomaticScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment"></a>

```typescript
public putDeployment(value: AppEngineFlexibleAppVersionDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---

##### `putEndpointsApiService` <a name="putEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```typescript
public putEndpointsApiService(value: AppEngineFlexibleAppVersionEndpointsApiService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `putEntrypoint` <a name="putEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint"></a>

```typescript
public putEntrypoint(value: AppEngineFlexibleAppVersionEntrypoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---

##### `putHandlers` <a name="putHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers"></a>

```typescript
public putHandlers(value: IResolvable | AppEngineFlexibleAppVersionHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]

---

##### `putLivenessCheck` <a name="putLivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck"></a>

```typescript
public putLivenessCheck(value: AppEngineFlexibleAppVersionLivenessCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `putManualScaling` <a name="putManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling"></a>

```typescript
public putManualScaling(value: AppEngineFlexibleAppVersionManualScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork"></a>

```typescript
public putNetwork(value: AppEngineFlexibleAppVersionNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---

##### `putReadinessCheck` <a name="putReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck"></a>

```typescript
public putReadinessCheck(value: AppEngineFlexibleAppVersionReadinessCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources"></a>

```typescript
public putResources(value: AppEngineFlexibleAppVersionResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineFlexibleAppVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

---

##### `putVpcAccessConnector` <a name="putVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```typescript
public putVpcAccessConnector(value: AppEngineFlexibleAppVersionVpcAccessConnector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `resetApiConfig` <a name="resetApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig"></a>

```typescript
public resetApiConfig(): void
```

##### `resetAutomaticScaling` <a name="resetAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```typescript
public resetAutomaticScaling(): void
```

##### `resetBetaSettings` <a name="resetBetaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings"></a>

```typescript
public resetBetaSettings(): void
```

##### `resetDefaultExpiration` <a name="resetDefaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```typescript
public resetDefaultExpiration(): void
```

##### `resetDeleteServiceOnDestroy` <a name="resetDeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```typescript
public resetDeleteServiceOnDestroy(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetEndpointsApiService` <a name="resetEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```typescript
public resetEndpointsApiService(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetHandlers` <a name="resetHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers"></a>

```typescript
public resetHandlers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundServices` <a name="resetInboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices"></a>

```typescript
public resetInboundServices(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetManualScaling` <a name="resetManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling"></a>

```typescript
public resetManualScaling(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNobuildFilesRegex` <a name="resetNobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```typescript
public resetNobuildFilesRegex(): void
```

##### `resetNoopOnDestroy` <a name="resetNoopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```typescript
public resetNoopOnDestroy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetRuntimeApiVersion` <a name="resetRuntimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```typescript
public resetRuntimeApiVersion(): void
```

##### `resetRuntimeChannel` <a name="resetRuntimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```typescript
public resetRuntimeChannel(): void
```

##### `resetRuntimeMainExecutablePath` <a name="resetRuntimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```typescript
public resetRuntimeMainExecutablePath(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetServingStatus` <a name="resetServingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus"></a>

```typescript
public resetServingStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetVpcAccessConnector` <a name="resetVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```typescript
public resetVpcAccessConnector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineFlexibleAppVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineFlexibleAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineFlexibleAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig">apiConfig</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService">endpointsApiService</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck">livenessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck">readinessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput">apiConfigInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput">automaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput">betaSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput">defaultExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">deleteServiceOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput">endpointsApiServiceInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput">entrypointInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput">handlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput">inboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput">livenessCheckInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput">manualScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">nobuildFilesRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput">noopOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput">readinessCheckInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput">runtimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput">runtimeChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">runtimeMainExecutablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput">servingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">vpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings">betaSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration">defaultExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex">nobuildFilesRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel">runtimeChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">runtimeMainExecutablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus">servingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig"></a>

```typescript
public readonly apiConfig: AppEngineFlexibleAppVersionApiConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `automaticScaling`<sup>Required</sup> <a name="automaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: AppEngineFlexibleAppVersionAutomaticScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment"></a>

```typescript
public readonly deployment: AppEngineFlexibleAppVersionDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `endpointsApiService`<sup>Required</sup> <a name="endpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```typescript
public readonly endpointsApiService: AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint"></a>

```typescript
public readonly entrypoint: AppEngineFlexibleAppVersionEntrypointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers"></a>

```typescript
public readonly handlers: AppEngineFlexibleAppVersionHandlersList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a>

---

##### `livenessCheck`<sup>Required</sup> <a name="livenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck"></a>

```typescript
public readonly livenessCheck: AppEngineFlexibleAppVersionLivenessCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `manualScaling`<sup>Required</sup> <a name="manualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling"></a>

```typescript
public readonly manualScaling: AppEngineFlexibleAppVersionManualScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network"></a>

```typescript
public readonly network: AppEngineFlexibleAppVersionNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `readinessCheck`<sup>Required</sup> <a name="readinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck"></a>

```typescript
public readonly readinessCheck: AppEngineFlexibleAppVersionReadinessCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources"></a>

```typescript
public readonly resources: AppEngineFlexibleAppVersionResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineFlexibleAppVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `vpcAccessConnector`<sup>Required</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```typescript
public readonly apiConfigInput: AppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---

##### `automaticScalingInput`<sup>Optional</sup> <a name="automaticScalingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```typescript
public readonly automaticScalingInput: AppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `betaSettingsInput`<sup>Optional</sup> <a name="betaSettingsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```typescript
public readonly betaSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExpirationInput`<sup>Optional</sup> <a name="defaultExpirationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```typescript
public readonly defaultExpirationInput: string;
```

- *Type:* string

---

##### `deleteServiceOnDestroyInput`<sup>Optional</sup> <a name="deleteServiceOnDestroyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```typescript
public readonly deleteServiceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: AppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---

##### `endpointsApiServiceInput`<sup>Optional</sup> <a name="endpointsApiServiceInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```typescript
public readonly endpointsApiServiceInput: AppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: AppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `handlersInput`<sup>Optional</sup> <a name="handlersInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput"></a>

```typescript
public readonly handlersInput: IResolvable | AppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundServicesInput`<sup>Optional</sup> <a name="inboundServicesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```typescript
public readonly inboundServicesInput: string[];
```

- *Type:* string[]

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `livenessCheckInput`<sup>Optional</sup> <a name="livenessCheckInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```typescript
public readonly livenessCheckInput: AppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `manualScalingInput`<sup>Optional</sup> <a name="manualScalingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```typescript
public readonly manualScalingInput: AppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput"></a>

```typescript
public readonly networkInput: AppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---

##### `nobuildFilesRegexInput`<sup>Optional</sup> <a name="nobuildFilesRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```typescript
public readonly nobuildFilesRegexInput: string;
```

- *Type:* string

---

##### `noopOnDestroyInput`<sup>Optional</sup> <a name="noopOnDestroyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```typescript
public readonly noopOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `readinessCheckInput`<sup>Optional</sup> <a name="readinessCheckInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```typescript
public readonly readinessCheckInput: AppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: AppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---

##### `runtimeApiVersionInput`<sup>Optional</sup> <a name="runtimeApiVersionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```typescript
public readonly runtimeApiVersionInput: string;
```

- *Type:* string

---

##### `runtimeChannelInput`<sup>Optional</sup> <a name="runtimeChannelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```typescript
public readonly runtimeChannelInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `runtimeMainExecutablePathInput`<sup>Optional</sup> <a name="runtimeMainExecutablePathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```typescript
public readonly runtimeMainExecutablePathInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `servingStatusInput`<sup>Optional</sup> <a name="servingStatusInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```typescript
public readonly servingStatusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineFlexibleAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `vpcAccessConnectorInput`<sup>Optional</sup> <a name="vpcAccessConnectorInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```typescript
public readonly vpcAccessConnectorInput: AppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `betaSettings`<sup>Required</sup> <a name="betaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings"></a>

```typescript
public readonly betaSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExpiration`<sup>Required</sup> <a name="defaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```typescript
public readonly defaultExpiration: string;
```

- *Type:* string

---

##### `deleteServiceOnDestroy`<sup>Required</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboundServices`<sup>Required</sup> <a name="inboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `nobuildFilesRegex`<sup>Required</sup> <a name="nobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```typescript
public readonly nobuildFilesRegex: string;
```

- *Type:* string

---

##### `noopOnDestroy`<sup>Required</sup> <a name="noopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `runtimeApiVersion`<sup>Required</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

---

##### `runtimeChannel`<sup>Required</sup> <a name="runtimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```typescript
public readonly runtimeChannel: string;
```

- *Type:* string

---

##### `runtimeMainExecutablePath`<sup>Required</sup> <a name="runtimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```typescript
public readonly runtimeMainExecutablePath: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `servingStatus`<sup>Required</sup> <a name="servingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineFlexibleAppVersionApiConfig <a name="AppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionApiConfig: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script">script</a></code> | <code>string</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction">authFailAction</a></code> | <code>string</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login">login</a></code> | <code>string</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url">url</a></code> | <code>string</code> | URL to serve the endpoint at. |

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#url AppEngineFlexibleAppVersion#url}

---

### AppEngineFlexibleAppVersionAutomaticScaling <a name="AppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionAutomaticScaling: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">diskUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">maxTotalInstances</a></code> | <code>number</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">minTotalInstances</a></code> | <code>number</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">networkUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">requestUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}

---

##### `coolDownPeriod`<sup>Optional</sup> <a name="coolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}

---

##### `diskUtilization`<sup>Optional</sup> <a name="diskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```typescript
public readonly diskUtilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `maxIdleInstances`<sup>Optional</sup> <a name="maxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}

---

##### `maxPendingLatency`<sup>Optional</sup> <a name="maxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}

---

##### `maxTotalInstances`<sup>Optional</sup> <a name="maxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```typescript
public readonly maxTotalInstances: number;
```

- *Type:* number

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}

---

##### `minPendingLatency`<sup>Optional</sup> <a name="minPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}

---

##### `minTotalInstances`<sup>Optional</sup> <a name="minTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```typescript
public readonly minTotalInstances: number;
```

- *Type:* number

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}

---

##### `networkUtilization`<sup>Optional</sup> <a name="networkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```typescript
public readonly networkUtilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#network_utilization AppEngineFlexibleAppVersion#network_utilization}

---

##### `requestUtilization`<sup>Optional</sup> <a name="requestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```typescript
public readonly requestUtilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#request_utilization AppEngineFlexibleAppVersion#request_utilization}

---

### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionAutomaticScalingCpuUtilization: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">targetUtilization</a></code> | <code>number</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">aggregationWindowLength</a></code> | <code>string</code> | Period of time over which CPU utilization is calculated. |

---

##### `targetUtilization`<sup>Required</sup> <a name="targetUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```typescript
public readonly targetUtilization: number;
```

- *Type:* number

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_utilization AppEngineFlexibleAppVersion#target_utilization}

---

##### `aggregationWindowLength`<sup>Optional</sup> <a name="aggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```typescript
public readonly aggregationWindowLength: string;
```

- *Type:* string

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}

---

### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionAutomaticScalingDiskUtilization: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">targetReadBytesPerSecond</a></code> | <code>number</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">targetReadOpsPerSecond</a></code> | <code>number</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">targetWriteBytesPerSecond</a></code> | <code>number</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">targetWriteOpsPerSecond</a></code> | <code>number</code> | Target ops written per second. |

---

##### `targetReadBytesPerSecond`<sup>Optional</sup> <a name="targetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```typescript
public readonly targetReadBytesPerSecond: number;
```

- *Type:* number

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `targetReadOpsPerSecond`<sup>Optional</sup> <a name="targetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```typescript
public readonly targetReadOpsPerSecond: number;
```

- *Type:* number

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `targetWriteBytesPerSecond`<sup>Optional</sup> <a name="targetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```typescript
public readonly targetWriteBytesPerSecond: number;
```

- *Type:* number

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `targetWriteOpsPerSecond`<sup>Optional</sup> <a name="targetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```typescript
public readonly targetWriteOpsPerSecond: number;
```

- *Type:* number

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionAutomaticScalingNetworkUtilization: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">targetReceivedBytesPerSecond</a></code> | <code>number</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">targetReceivedPacketsPerSecond</a></code> | <code>number</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">targetSentBytesPerSecond</a></code> | <code>number</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">targetSentPacketsPerSecond</a></code> | <code>number</code> | Target packets sent per second. |

---

##### `targetReceivedBytesPerSecond`<sup>Optional</sup> <a name="targetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```typescript
public readonly targetReceivedBytesPerSecond: number;
```

- *Type:* number

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `targetReceivedPacketsPerSecond`<sup>Optional</sup> <a name="targetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```typescript
public readonly targetReceivedPacketsPerSecond: number;
```

- *Type:* number

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `targetSentBytesPerSecond`<sup>Optional</sup> <a name="targetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```typescript
public readonly targetSentBytesPerSecond: number;
```

- *Type:* number

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `targetSentPacketsPerSecond`<sup>Optional</sup> <a name="targetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```typescript
public readonly targetSentPacketsPerSecond: number;
```

- *Type:* number

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionAutomaticScalingRequestUtilization: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">targetConcurrentRequests</a></code> | <code>number</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">targetRequestCountPerSecond</a></code> | <code>string</code> | Target requests per second. |

---

##### `targetConcurrentRequests`<sup>Optional</sup> <a name="targetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```typescript
public readonly targetConcurrentRequests: number;
```

- *Type:* number

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `targetRequestCountPerSecond`<sup>Optional</sup> <a name="targetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```typescript
public readonly targetRequestCountPerSecond: string;
```

- *Type:* string

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}

---

### AppEngineFlexibleAppVersionConfig <a name="AppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionConfig: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck">livenessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck">readinessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime">runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service">service</a></code> | <code>string</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig">apiConfig</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings">betaSettings</a></code> | <code>{[ key: string ]: string}</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration">defaultExpiration</a></code> | <code>string</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService">endpointsApiService</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers">handlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">nobuildFilesRegex</a></code> | <code>string</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel">runtimeChannel</a></code> | <code>string</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">runtimeMainExecutablePath</a></code> | <code>string</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus">servingStatus</a></code> | <code>string</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `livenessCheck`<sup>Required</sup> <a name="livenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```typescript
public readonly livenessCheck: AppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#liveness_check AppEngineFlexibleAppVersion#liveness_check}

---

##### `readinessCheck`<sup>Required</sup> <a name="readinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```typescript
public readonly readinessCheck: AppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#readiness_check AppEngineFlexibleAppVersion#readiness_check}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#runtime AppEngineFlexibleAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#service AppEngineFlexibleAppVersion#service}

---

##### `apiConfig`<sup>Optional</sup> <a name="apiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```typescript
public readonly apiConfig: AppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#api_config AppEngineFlexibleAppVersion#api_config}

---

##### `automaticScaling`<sup>Optional</sup> <a name="automaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: AppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}

---

##### `betaSettings`<sup>Optional</sup> <a name="betaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```typescript
public readonly betaSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#beta_settings AppEngineFlexibleAppVersion#beta_settings}

---

##### `defaultExpiration`<sup>Optional</sup> <a name="defaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```typescript
public readonly defaultExpiration: string;
```

- *Type:* string

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#default_expiration AppEngineFlexibleAppVersion#default_expiration}

---

##### `deleteServiceOnDestroy`<sup>Optional</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment"></a>

```typescript
public readonly deployment: AppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#deployment AppEngineFlexibleAppVersion#deployment}

---

##### `endpointsApiService`<sup>Optional</sup> <a name="endpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```typescript
public readonly endpointsApiService: AppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: AppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#entrypoint AppEngineFlexibleAppVersion#entrypoint}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#env_variables AppEngineFlexibleAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers"></a>

```typescript
public readonly handlers: IResolvable | AppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#handlers AppEngineFlexibleAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundServices`<sup>Optional</sup> <a name="inboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#inbound_services AppEngineFlexibleAppVersion#inbound_services}

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#instance_class AppEngineFlexibleAppVersion#instance_class}

---

##### `manualScaling`<sup>Optional</sup> <a name="manualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```typescript
public readonly manualScaling: AppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network"></a>

```typescript
public readonly network: AppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#network AppEngineFlexibleAppVersion#network}

---

##### `nobuildFilesRegex`<sup>Optional</sup> <a name="nobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```typescript
public readonly nobuildFilesRegex: string;
```

- *Type:* string

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `noopOnDestroy`<sup>Optional</sup> <a name="noopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources"></a>

```typescript
public readonly resources: AppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#resources AppEngineFlexibleAppVersion#resources}

---

##### `runtimeApiVersion`<sup>Optional</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}

---

##### `runtimeChannel`<sup>Optional</sup> <a name="runtimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```typescript
public readonly runtimeChannel: string;
```

- *Type:* string

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}

---

##### `runtimeMainExecutablePath`<sup>Optional</sup> <a name="runtimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```typescript
public readonly runtimeMainExecutablePath: string;
```

- *Type:* string

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#service_account AppEngineFlexibleAppVersion#service_account}

---

##### `servingStatus`<sup>Optional</sup> <a name="servingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#serving_status AppEngineFlexibleAppVersion#serving_status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineFlexibleAppVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#timeouts AppEngineFlexibleAppVersion#timeouts}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#version_id AppEngineFlexibleAppVersion#version_id}

---

##### `vpcAccessConnector`<sup>Optional</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: AppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}

---

### AppEngineFlexibleAppVersionDeployment <a name="AppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionDeployment: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">cloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files">files</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `cloudBuildOptions`<sup>Optional</sup> <a name="cloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```typescript
public readonly cloudBuildOptions: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container"></a>

```typescript
public readonly container: AppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#container AppEngineFlexibleAppVersion#container}

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files"></a>

```typescript
public readonly files: IResolvable | AppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#files AppEngineFlexibleAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip"></a>

```typescript
public readonly zip: AppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#zip AppEngineFlexibleAppVersion#zip}

---

### AppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionDeploymentCloudBuildOptions: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">appYamlPath</a></code> | <code>string</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">cloudBuildTimeout</a></code> | <code>string</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `appYamlPath`<sup>Required</sup> <a name="appYamlPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```typescript
public readonly appYamlPath: string;
```

- *Type:* string

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}

---

##### `cloudBuildTimeout`<sup>Optional</sup> <a name="cloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```typescript
public readonly cloudBuildTimeout: string;
```

- *Type:* string

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}

---

### AppEngineFlexibleAppVersionDeploymentContainer <a name="AppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionDeploymentContainer: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image">image</a></code> | <code>string</code> | URI to the hosted container image in Google Container Registry. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#image AppEngineFlexibleAppVersion#image}

---

### AppEngineFlexibleAppVersionDeploymentFiles <a name="AppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionDeploymentFiles: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}.

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `sha1Sum`<sup>Optional</sup> <a name="sha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#sha1_sum AppEngineFlexibleAppVersion#sha1_sum}

---

### AppEngineFlexibleAppVersionDeploymentZip <a name="AppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionDeploymentZip: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount">filesCount</a></code> | <code>number</code> | files count. |

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `filesCount`<sup>Optional</sup> <a name="filesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#files_count AppEngineFlexibleAppVersion#files_count}

---

### AppEngineFlexibleAppVersionEndpointsApiService <a name="AppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionEndpointsApiService: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name">name</a></code> | <code>string</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId">configId</a></code> | <code>string</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">disableTraceSampling</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">rolloutStrategy</a></code> | <code>string</code> | Endpoints rollout strategy. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `configId`<sup>Optional</sup> <a name="configId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#config_id AppEngineFlexibleAppVersion#config_id}

---

##### `disableTraceSampling`<sup>Optional</sup> <a name="disableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```typescript
public readonly disableTraceSampling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `rolloutStrategy`<sup>Optional</sup> <a name="rolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```typescript
public readonly rolloutStrategy: string;
```

- *Type:* string

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}

---

### AppEngineFlexibleAppVersionEntrypoint <a name="AppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionEntrypoint: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell">shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#shell AppEngineFlexibleAppVersion#shell}

---

### AppEngineFlexibleAppVersionHandlers <a name="AppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionHandlers: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction">authFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login">login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex">urlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `redirectHttpResponseCode`<sup>Optional</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#redirect_http_response_code AppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script"></a>

```typescript
public readonly script: AppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `staticFiles`<sup>Optional</sup> <a name="staticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```typescript
public readonly staticFiles: AppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#static_files AppEngineFlexibleAppVersion#static_files}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#url_regex AppEngineFlexibleAppVersion#url_regex}

---

### AppEngineFlexibleAppVersionHandlersScript <a name="AppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionHandlersScript: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath">scriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#script_path AppEngineFlexibleAppVersion#script_path}

---

### AppEngineFlexibleAppVersionHandlersStaticFiles <a name="AppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionHandlersStaticFiles: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">mimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `applicationReadable`<sup>Optional</sup> <a name="applicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#application_readable AppEngineFlexibleAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#expiration AppEngineFlexibleAppVersion#expiration}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#http_headers AppEngineFlexibleAppVersion#http_headers}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#mime_type AppEngineFlexibleAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `requireMatchingFile`<sup>Optional</sup> <a name="requireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}

---

##### `uploadPathRegex`<sup>Optional</sup> <a name="uploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}

---

### AppEngineFlexibleAppVersionLivenessCheck <a name="AppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionLivenessCheck: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path">path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">checkInterval</a></code> | <code>string</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host">host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">initialDelay</a></code> | <code>string</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">successThreshold</a></code> | <code>number</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout">timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#initial_delay AppEngineFlexibleAppVersion#initial_delay}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionManualScaling <a name="AppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionManualScaling: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances">instances</a></code> | <code>number</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#instances AppEngineFlexibleAppVersion#instances}

---

### AppEngineFlexibleAppVersionNetwork <a name="AppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionNetwork: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name">name</a></code> | <code>string</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts">forwardedPorts</a></code> | <code>string[]</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag">instanceTag</a></code> | <code>string</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity">sessionAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork">subnetwork</a></code> | <code>string</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `forwardedPorts`<sup>Optional</sup> <a name="forwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```typescript
public readonly forwardedPorts: string[];
```

- *Type:* string[]

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}

---

##### `instanceTag`<sup>Optional</sup> <a name="instanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#instance_tag AppEngineFlexibleAppVersion#instance_tag}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#session_affinity AppEngineFlexibleAppVersion#session_affinity}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#subnetwork AppEngineFlexibleAppVersion#subnetwork}

---

### AppEngineFlexibleAppVersionReadinessCheck <a name="AppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionReadinessCheck: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path">path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">appStartTimeout</a></code> | <code>string</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">checkInterval</a></code> | <code>string</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host">host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">successThreshold</a></code> | <code>number</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout">timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `appStartTimeout`<sup>Optional</sup> <a name="appStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```typescript
public readonly appStartTimeout: string;
```

- *Type:* string

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionResources <a name="AppEngineFlexibleAppVersionResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionResources: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu">cpu</a></code> | <code>number</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb">diskGb</a></code> | <code>number</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | volumes block. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#cpu AppEngineFlexibleAppVersion#cpu}

---

##### `diskGb`<sup>Optional</sup> <a name="diskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb"></a>

```typescript
public readonly diskGb: number;
```

- *Type:* number

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#disk_gb AppEngineFlexibleAppVersion#disk_gb}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#memory_gb AppEngineFlexibleAppVersion#memory_gb}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | AppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#volumes AppEngineFlexibleAppVersion#volumes}

---

### AppEngineFlexibleAppVersionResourcesVolumes <a name="AppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionResourcesVolumes: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name">name</a></code> | <code>string</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">sizeGb</a></code> | <code>number</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">volumeType</a></code> | <code>string</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#size_gb AppEngineFlexibleAppVersion#size_gb}

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#volume_type AppEngineFlexibleAppVersion#volume_type}

---

### AppEngineFlexibleAppVersionTimeouts <a name="AppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionTimeouts: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}.

---

### AppEngineFlexibleAppVersionVpcAccessConnector <a name="AppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

const appEngineFlexibleAppVersionVpcAccessConnector: appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name">name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineFlexibleAppVersionApiConfigOutputReference <a name="AppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">resetAggregationWindowLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregationWindowLength` <a name="resetAggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```typescript
public resetAggregationWindowLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">aggregationWindowLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">targetUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">aggregationWindowLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">targetUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationWindowLengthInput`<sup>Optional</sup> <a name="aggregationWindowLengthInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```typescript
public readonly aggregationWindowLengthInput: string;
```

- *Type:* string

---

##### `targetUtilizationInput`<sup>Optional</sup> <a name="targetUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```typescript
public readonly targetUtilizationInput: number;
```

- *Type:* number

---

##### `aggregationWindowLength`<sup>Required</sup> <a name="aggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```typescript
public readonly aggregationWindowLength: string;
```

- *Type:* string

---

##### `targetUtilization`<sup>Required</sup> <a name="targetUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```typescript
public readonly targetUtilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">resetTargetReadBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">resetTargetReadOpsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">resetTargetWriteBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">resetTargetWriteOpsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetReadBytesPerSecond` <a name="resetTargetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```typescript
public resetTargetReadBytesPerSecond(): void
```

##### `resetTargetReadOpsPerSecond` <a name="resetTargetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```typescript
public resetTargetReadOpsPerSecond(): void
```

##### `resetTargetWriteBytesPerSecond` <a name="resetTargetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```typescript
public resetTargetWriteBytesPerSecond(): void
```

##### `resetTargetWriteOpsPerSecond` <a name="resetTargetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```typescript
public resetTargetWriteOpsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">targetReadBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">targetReadOpsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">targetWriteBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">targetWriteOpsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">targetReadBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">targetReadOpsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">targetWriteBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">targetWriteOpsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetReadBytesPerSecondInput`<sup>Optional</sup> <a name="targetReadBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```typescript
public readonly targetReadBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetReadOpsPerSecondInput`<sup>Optional</sup> <a name="targetReadOpsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```typescript
public readonly targetReadOpsPerSecondInput: number;
```

- *Type:* number

---

##### `targetWriteBytesPerSecondInput`<sup>Optional</sup> <a name="targetWriteBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```typescript
public readonly targetWriteBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetWriteOpsPerSecondInput`<sup>Optional</sup> <a name="targetWriteOpsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```typescript
public readonly targetWriteOpsPerSecondInput: number;
```

- *Type:* number

---

##### `targetReadBytesPerSecond`<sup>Required</sup> <a name="targetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```typescript
public readonly targetReadBytesPerSecond: number;
```

- *Type:* number

---

##### `targetReadOpsPerSecond`<sup>Required</sup> <a name="targetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```typescript
public readonly targetReadOpsPerSecond: number;
```

- *Type:* number

---

##### `targetWriteBytesPerSecond`<sup>Required</sup> <a name="targetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```typescript
public readonly targetWriteBytesPerSecond: number;
```

- *Type:* number

---

##### `targetWriteOpsPerSecond`<sup>Required</sup> <a name="targetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```typescript
public readonly targetWriteOpsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">resetTargetReceivedBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">resetTargetReceivedPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">resetTargetSentBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">resetTargetSentPacketsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetReceivedBytesPerSecond` <a name="resetTargetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```typescript
public resetTargetReceivedBytesPerSecond(): void
```

##### `resetTargetReceivedPacketsPerSecond` <a name="resetTargetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```typescript
public resetTargetReceivedPacketsPerSecond(): void
```

##### `resetTargetSentBytesPerSecond` <a name="resetTargetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```typescript
public resetTargetSentBytesPerSecond(): void
```

##### `resetTargetSentPacketsPerSecond` <a name="resetTargetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```typescript
public resetTargetSentPacketsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">targetReceivedBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">targetReceivedPacketsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">targetSentBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">targetSentPacketsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">targetReceivedBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">targetReceivedPacketsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">targetSentBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">targetSentPacketsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetReceivedBytesPerSecondInput`<sup>Optional</sup> <a name="targetReceivedBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```typescript
public readonly targetReceivedBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetReceivedPacketsPerSecondInput`<sup>Optional</sup> <a name="targetReceivedPacketsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```typescript
public readonly targetReceivedPacketsPerSecondInput: number;
```

- *Type:* number

---

##### `targetSentBytesPerSecondInput`<sup>Optional</sup> <a name="targetSentBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```typescript
public readonly targetSentBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetSentPacketsPerSecondInput`<sup>Optional</sup> <a name="targetSentPacketsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```typescript
public readonly targetSentPacketsPerSecondInput: number;
```

- *Type:* number

---

##### `targetReceivedBytesPerSecond`<sup>Required</sup> <a name="targetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```typescript
public readonly targetReceivedBytesPerSecond: number;
```

- *Type:* number

---

##### `targetReceivedPacketsPerSecond`<sup>Required</sup> <a name="targetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```typescript
public readonly targetReceivedPacketsPerSecond: number;
```

- *Type:* number

---

##### `targetSentBytesPerSecond`<sup>Required</sup> <a name="targetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```typescript
public readonly targetSentBytesPerSecond: number;
```

- *Type:* number

---

##### `targetSentPacketsPerSecond`<sup>Required</sup> <a name="targetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```typescript
public readonly targetSentPacketsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">putDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">putNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">putRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">resetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">resetDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">resetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">resetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">resetMaxTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">resetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">resetMinTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">resetNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">resetRequestUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```typescript
public putCpuUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `putDiskUtilization` <a name="putDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```typescript
public putDiskUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `putNetworkUtilization` <a name="putNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```typescript
public putNetworkUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `putRequestUtilization` <a name="putRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```typescript
public putRequestUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `resetCoolDownPeriod` <a name="resetCoolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```typescript
public resetCoolDownPeriod(): void
```

##### `resetDiskUtilization` <a name="resetDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```typescript
public resetDiskUtilization(): void
```

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxIdleInstances` <a name="resetMaxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```typescript
public resetMaxIdleInstances(): void
```

##### `resetMaxPendingLatency` <a name="resetMaxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```typescript
public resetMaxPendingLatency(): void
```

##### `resetMaxTotalInstances` <a name="resetMaxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```typescript
public resetMaxTotalInstances(): void
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```typescript
public resetMinIdleInstances(): void
```

##### `resetMinPendingLatency` <a name="resetMinPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```typescript
public resetMinPendingLatency(): void
```

##### `resetMinTotalInstances` <a name="resetMinTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```typescript
public resetMinTotalInstances(): void
```

##### `resetNetworkUtilization` <a name="resetNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```typescript
public resetNetworkUtilization(): void
```

##### `resetRequestUtilization` <a name="resetRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```typescript
public resetRequestUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">diskUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">networkUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">requestUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">coolDownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">diskUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">maxIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">maxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">maxTotalInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">minPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">minTotalInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">networkUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">requestUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">maxTotalInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">minTotalInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `diskUtilization`<sup>Required</sup> <a name="diskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```typescript
public readonly diskUtilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `networkUtilization`<sup>Required</sup> <a name="networkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```typescript
public readonly networkUtilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `requestUtilization`<sup>Required</sup> <a name="requestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```typescript
public readonly requestUtilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `coolDownPeriodInput`<sup>Optional</sup> <a name="coolDownPeriodInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```typescript
public readonly coolDownPeriodInput: string;
```

- *Type:* string

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```typescript
public readonly cpuUtilizationInput: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `diskUtilizationInput`<sup>Optional</sup> <a name="diskUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```typescript
public readonly diskUtilizationInput: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxIdleInstancesInput`<sup>Optional</sup> <a name="maxIdleInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```typescript
public readonly maxIdleInstancesInput: number;
```

- *Type:* number

---

##### `maxPendingLatencyInput`<sup>Optional</sup> <a name="maxPendingLatencyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```typescript
public readonly maxPendingLatencyInput: string;
```

- *Type:* string

---

##### `maxTotalInstancesInput`<sup>Optional</sup> <a name="maxTotalInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```typescript
public readonly maxTotalInstancesInput: number;
```

- *Type:* number

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```typescript
public readonly minIdleInstancesInput: number;
```

- *Type:* number

---

##### `minPendingLatencyInput`<sup>Optional</sup> <a name="minPendingLatencyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```typescript
public readonly minPendingLatencyInput: string;
```

- *Type:* string

---

##### `minTotalInstancesInput`<sup>Optional</sup> <a name="minTotalInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```typescript
public readonly minTotalInstancesInput: number;
```

- *Type:* number

---

##### `networkUtilizationInput`<sup>Optional</sup> <a name="networkUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```typescript
public readonly networkUtilizationInput: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `requestUtilizationInput`<sup>Optional</sup> <a name="requestUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```typescript
public readonly requestUtilizationInput: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxIdleInstances`<sup>Required</sup> <a name="maxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

---

##### `maxPendingLatency`<sup>Required</sup> <a name="maxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

---

##### `maxTotalInstances`<sup>Required</sup> <a name="maxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```typescript
public readonly maxTotalInstances: number;
```

- *Type:* number

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

---

##### `minPendingLatency`<sup>Required</sup> <a name="minPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

---

##### `minTotalInstances`<sup>Required</sup> <a name="minTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```typescript
public readonly minTotalInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">resetTargetConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">resetTargetRequestCountPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetConcurrentRequests` <a name="resetTargetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```typescript
public resetTargetConcurrentRequests(): void
```

##### `resetTargetRequestCountPerSecond` <a name="resetTargetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```typescript
public resetTargetRequestCountPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">targetConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">targetRequestCountPerSecondInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">targetConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">targetRequestCountPerSecond</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetConcurrentRequestsInput`<sup>Optional</sup> <a name="targetConcurrentRequestsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```typescript
public readonly targetConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `targetRequestCountPerSecondInput`<sup>Optional</sup> <a name="targetRequestCountPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```typescript
public readonly targetRequestCountPerSecondInput: string;
```

- *Type:* string

---

##### `targetConcurrentRequests`<sup>Required</sup> <a name="targetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```typescript
public readonly targetConcurrentRequests: number;
```

- *Type:* number

---

##### `targetRequestCountPerSecond`<sup>Required</sup> <a name="targetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```typescript
public readonly targetRequestCountPerSecond: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">resetCloudBuildTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudBuildTimeout` <a name="resetCloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```typescript
public resetCloudBuildTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">appYamlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">cloudBuildTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">appYamlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">cloudBuildTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appYamlPathInput`<sup>Optional</sup> <a name="appYamlPathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```typescript
public readonly appYamlPathInput: string;
```

- *Type:* string

---

##### `cloudBuildTimeoutInput`<sup>Optional</sup> <a name="cloudBuildTimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```typescript
public readonly cloudBuildTimeoutInput: string;
```

- *Type:* string

---

##### `appYamlPath`<sup>Required</sup> <a name="appYamlPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```typescript
public readonly appYamlPath: string;
```

- *Type:* string

---

##### `cloudBuildTimeout`<sup>Required</sup> <a name="cloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```typescript
public readonly cloudBuildTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### AppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="AppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---


### AppEngineFlexibleAppVersionDeploymentFilesList <a name="AppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```typescript
public get(index: number): AppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]

---


### AppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="AppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">resetSha1Sum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha1Sum` <a name="resetSha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```typescript
public resetSha1Sum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sha1SumInput`<sup>Optional</sup> <a name="sha1SumInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```typescript
public readonly sha1SumInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sha1Sum`<sup>Required</sup> <a name="sha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionDeploymentFiles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>

---


### AppEngineFlexibleAppVersionDeploymentOutputReference <a name="AppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">putCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip">putZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">resetCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">resetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">resetZip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudBuildOptions` <a name="putCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```typescript
public putCloudBuildOptions(value: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```typescript
public putContainer(value: AppEngineFlexibleAppVersionDeploymentContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `putFiles` <a name="putFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```typescript
public putFiles(value: IResolvable | AppEngineFlexibleAppVersionDeploymentFiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]

---

##### `putZip` <a name="putZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```typescript
public putZip(value: AppEngineFlexibleAppVersionDeploymentZip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `resetCloudBuildOptions` <a name="resetCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```typescript
public resetCloudBuildOptions(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetFiles` <a name="resetFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```typescript
public resetFiles(): void
```

##### `resetZip` <a name="resetZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```typescript
public resetZip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">cloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">cloudBuildOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">filesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">zipInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudBuildOptions`<sup>Required</sup> <a name="cloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```typescript
public readonly cloudBuildOptions: AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```typescript
public readonly container: AppEngineFlexibleAppVersionDeploymentContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```typescript
public readonly files: AppEngineFlexibleAppVersionDeploymentFilesList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```typescript
public readonly zip: AppEngineFlexibleAppVersionDeploymentZipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `cloudBuildOptionsInput`<sup>Optional</sup> <a name="cloudBuildOptionsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```typescript
public readonly cloudBuildOptionsInput: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: AppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: IResolvable | AppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>[]

---

##### `zipInput`<sup>Optional</sup> <a name="zipInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```typescript
public readonly zipInput: AppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---


### AppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="AppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">resetFilesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilesCount` <a name="resetFilesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```typescript
public resetFilesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">filesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">filesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesCountInput`<sup>Optional</sup> <a name="filesCountInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```typescript
public readonly filesCountInput: number;
```

- *Type:* number

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `filesCount`<sup>Required</sup> <a name="filesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---


### AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">resetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">resetDisableTraceSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">resetRolloutStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigId` <a name="resetConfigId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```typescript
public resetConfigId(): void
```

##### `resetDisableTraceSampling` <a name="resetDisableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```typescript
public resetDisableTraceSampling(): void
```

##### `resetRolloutStrategy` <a name="resetRolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```typescript
public resetRolloutStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">disableTraceSamplingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">rolloutStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">disableTraceSampling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">rolloutStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `disableTraceSamplingInput`<sup>Optional</sup> <a name="disableTraceSamplingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```typescript
public readonly disableTraceSamplingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rolloutStrategyInput`<sup>Optional</sup> <a name="rolloutStrategyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```typescript
public readonly rolloutStrategyInput: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `disableTraceSampling`<sup>Required</sup> <a name="disableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```typescript
public readonly disableTraceSampling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rolloutStrategy`<sup>Required</sup> <a name="rolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```typescript
public readonly rolloutStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---


### AppEngineFlexibleAppVersionEntrypointOutputReference <a name="AppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">shellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```typescript
public readonly shellInput: string;
```

- *Type:* string

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---


### AppEngineFlexibleAppVersionHandlersList <a name="AppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get"></a>

```typescript
public get(index: number): AppEngineFlexibleAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>[]

---


### AppEngineFlexibleAppVersionHandlersOutputReference <a name="AppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript">putScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">putStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">resetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">resetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScript` <a name="putScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```typescript
public putScript(value: AppEngineFlexibleAppVersionHandlersScript): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---

##### `putStaticFiles` <a name="putStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

```typescript
public putStaticFiles(value: AppEngineFlexibleAppVersionHandlersStaticFiles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetRedirectHttpResponseCode` <a name="resetRedirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```typescript
public resetRedirectHttpResponseCode(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetStaticFiles` <a name="resetStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```typescript
public resetStaticFiles(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">scriptInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">staticFilesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```typescript
public readonly script: AppEngineFlexibleAppVersionHandlersScriptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `staticFiles`<sup>Required</sup> <a name="staticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```typescript
public readonly staticFiles: AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `redirectHttpResponseCodeInput`<sup>Optional</sup> <a name="redirectHttpResponseCodeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```typescript
public readonly redirectHttpResponseCodeInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: AppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `staticFilesInput`<sup>Optional</sup> <a name="staticFilesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```typescript
public readonly staticFilesInput: AppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `redirectHttpResponseCode`<sup>Required</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionHandlers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>

---


### AppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="AppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">scriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```typescript
public readonly scriptPathInput: string;
```

- *Type:* string

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---


### AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">resetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">resetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">resetUploadPathRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationReadable` <a name="resetApplicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```typescript
public resetApplicationReadable(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequireMatchingFile` <a name="resetRequireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```typescript
public resetRequireMatchingFile(): void
```

##### `resetUploadPathRegex` <a name="resetUploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```typescript
public resetUploadPathRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">applicationReadableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">requireMatchingFileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">uploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationReadableInput`<sup>Optional</sup> <a name="applicationReadableInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```typescript
public readonly applicationReadableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requireMatchingFileInput`<sup>Optional</sup> <a name="requireMatchingFileInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```typescript
public readonly requireMatchingFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegexInput`<sup>Optional</sup> <a name="uploadPathRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```typescript
public readonly uploadPathRegexInput: string;
```

- *Type:* string

---

##### `applicationReadable`<sup>Required</sup> <a name="applicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requireMatchingFile`<sup>Required</sup> <a name="requireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegex`<sup>Required</sup> <a name="uploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### AppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="AppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">resetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckInterval` <a name="resetCheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```typescript
public resetCheckInterval(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">checkIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">checkInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">initialDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkIntervalInput`<sup>Optional</sup> <a name="checkIntervalInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```typescript
public readonly checkIntervalInput: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `checkInterval`<sup>Required</sup> <a name="checkInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---


### AppEngineFlexibleAppVersionManualScalingOutputReference <a name="AppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---


### AppEngineFlexibleAppVersionNetworkOutputReference <a name="AppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">resetForwardedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">resetInstanceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardedPorts` <a name="resetForwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```typescript
public resetForwardedPorts(): void
```

##### `resetInstanceTag` <a name="resetInstanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```typescript
public resetInstanceTag(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">forwardedPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">instanceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">forwardedPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">instanceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedPortsInput`<sup>Optional</sup> <a name="forwardedPortsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```typescript
public readonly forwardedPortsInput: string[];
```

- *Type:* string[]

---

##### `instanceTagInput`<sup>Optional</sup> <a name="instanceTagInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```typescript
public readonly instanceTagInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `forwardedPorts`<sup>Required</sup> <a name="forwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```typescript
public readonly forwardedPorts: string[];
```

- *Type:* string[]

---

##### `instanceTag`<sup>Required</sup> <a name="instanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---


### AppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="AppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">resetAppStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">resetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppStartTimeout` <a name="resetAppStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```typescript
public resetAppStartTimeout(): void
```

##### `resetCheckInterval` <a name="resetCheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```typescript
public resetCheckInterval(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">appStartTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">checkIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">appStartTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">checkInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appStartTimeoutInput`<sup>Optional</sup> <a name="appStartTimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```typescript
public readonly appStartTimeoutInput: string;
```

- *Type:* string

---

##### `checkIntervalInput`<sup>Optional</sup> <a name="checkIntervalInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```typescript
public readonly checkIntervalInput: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `appStartTimeout`<sup>Required</sup> <a name="appStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```typescript
public readonly appStartTimeout: string;
```

- *Type:* string

---

##### `checkInterval`<sup>Required</sup> <a name="checkInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---


### AppEngineFlexibleAppVersionResourcesOutputReference <a name="AppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">resetDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | AppEngineFlexibleAppVersionResourcesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]

---

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetDiskGb` <a name="resetDiskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```typescript
public resetDiskGb(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">diskGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">diskGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: AppEngineFlexibleAppVersionResourcesVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `diskGbInput`<sup>Optional</sup> <a name="diskGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```typescript
public readonly diskGbInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | AppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `diskGb`<sup>Required</sup> <a name="diskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```typescript
public readonly diskGb: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---


### AppEngineFlexibleAppVersionResourcesVolumesList <a name="AppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```typescript
public get(index: number): AppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>[]

---


### AppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="AppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionResourcesVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>

---


### AppEngineFlexibleAppVersionTimeoutsOutputReference <a name="AppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineFlexibleAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

---


### AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```typescript
import { appEngineFlexibleAppVersion } from '@cdktf/provider-google'

new appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---



