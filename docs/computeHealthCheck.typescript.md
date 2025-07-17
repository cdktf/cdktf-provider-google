# `computeHealthCheck` Submodule <a name="`computeHealthCheck` Submodule" id="@cdktf/provider-google.computeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHealthCheck <a name="ComputeHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheck(scope: Construct, id: string, config: ComputeHealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig">ComputeHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig">ComputeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck">putGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck">putHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck">putHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck">putHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck">putSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck">putTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck">resetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck">resetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck">resetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck">resetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSourceRegions">resetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck">resetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck">resetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGrpcHealthCheck` <a name="putGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck"></a>

```typescript
public putGrpcHealthCheck(value: ComputeHealthCheckGrpcHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---

##### `putHttp2HealthCheck` <a name="putHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck"></a>

```typescript
public putHttp2HealthCheck(value: ComputeHealthCheckHttp2HealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---

##### `putHttpHealthCheck` <a name="putHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck"></a>

```typescript
public putHttpHealthCheck(value: ComputeHealthCheckHttpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---

##### `putHttpsHealthCheck` <a name="putHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck"></a>

```typescript
public putHttpsHealthCheck(value: ComputeHealthCheckHttpsHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig"></a>

```typescript
public putLogConfig(value: ComputeHealthCheckLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---

##### `putSslHealthCheck` <a name="putSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck"></a>

```typescript
public putSslHealthCheck(value: ComputeHealthCheckSslHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---

##### `putTcpHealthCheck` <a name="putTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck"></a>

```typescript
public putTcpHealthCheck(value: ComputeHealthCheckTcpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeHealthCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec"></a>

```typescript
public resetCheckIntervalSec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGrpcHealthCheck` <a name="resetGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck"></a>

```typescript
public resetGrpcHealthCheck(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetHttp2HealthCheck` <a name="resetHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck"></a>

```typescript
public resetHttp2HealthCheck(): void
```

##### `resetHttpHealthCheck` <a name="resetHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck"></a>

```typescript
public resetHttpHealthCheck(): void
```

##### `resetHttpsHealthCheck` <a name="resetHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck"></a>

```typescript
public resetHttpsHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSourceRegions` <a name="resetSourceRegions" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSourceRegions"></a>

```typescript
public resetSourceRegions(): void
```

##### `resetSslHealthCheck` <a name="resetSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck"></a>

```typescript
public resetSslHealthCheck(): void
```

##### `resetTcpHealthCheck` <a name="resetTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck"></a>

```typescript
public resetTcpHealthCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

computeHealthCheck.ComputeHealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

computeHealthCheck.ComputeHealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

computeHealthCheck.ComputeHealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

computeHealthCheck.ComputeHealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput">grpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput">http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput">httpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput">httpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sourceRegionsInput">sourceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput">sslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput">tcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sourceRegions">sourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `grpcHealthCheck`<sup>Required</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: ComputeHealthCheckGrpcHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `http2HealthCheck`<sup>Required</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: ComputeHealthCheckHttp2HealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: ComputeHealthCheckHttpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `httpsHealthCheck`<sup>Required</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: ComputeHealthCheckHttpsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeHealthCheckLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sslHealthCheck`<sup>Required</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: ComputeHealthCheckSslHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcpHealthCheck`<sup>Required</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: ComputeHealthCheckTcpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeHealthCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput"></a>

```typescript
public readonly checkIntervalSecInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `grpcHealthCheckInput`<sup>Optional</sup> <a name="grpcHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput"></a>

```typescript
public readonly grpcHealthCheckInput: ComputeHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `http2HealthCheckInput`<sup>Optional</sup> <a name="http2HealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput"></a>

```typescript
public readonly http2HealthCheckInput: ComputeHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---

##### `httpHealthCheckInput`<sup>Optional</sup> <a name="httpHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput"></a>

```typescript
public readonly httpHealthCheckInput: ComputeHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---

##### `httpsHealthCheckInput`<sup>Optional</sup> <a name="httpsHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput"></a>

```typescript
public readonly httpsHealthCheckInput: ComputeHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: ComputeHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceRegionsInput`<sup>Optional</sup> <a name="sourceRegionsInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sourceRegionsInput"></a>

```typescript
public readonly sourceRegionsInput: string[];
```

- *Type:* string[]

---

##### `sslHealthCheckInput`<sup>Optional</sup> <a name="sslHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput"></a>

```typescript
public readonly sslHealthCheckInput: ComputeHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---

##### `tcpHealthCheckInput`<sup>Optional</sup> <a name="tcpHealthCheckInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput"></a>

```typescript
public readonly tcpHealthCheckInput: ComputeHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sourceRegions`<sup>Required</sup> <a name="sourceRegions" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sourceRegions"></a>

```typescript
public readonly sourceRegions: string[];
```

- *Type:* string[]

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHealthCheckConfig <a name="ComputeHealthCheckConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckConfig: computeHealthCheck.ComputeHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sourceRegions">sourceRegions</a></code> | <code>string[]</code> | The list of cloud regions from which health checks are performed. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#name ComputeHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#check_interval_sec ComputeHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#description ComputeHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: ComputeHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#grpc_health_check ComputeHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#healthy_threshold ComputeHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: ComputeHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#http2_health_check ComputeHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: ComputeHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#http_health_check ComputeHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: ComputeHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#https_health_check ComputeHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#log_config ComputeHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}.

---

##### `sourceRegions`<sup>Optional</sup> <a name="sourceRegions" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sourceRegions"></a>

```typescript
public readonly sourceRegions: string[];
```

- *Type:* string[]

The list of cloud regions from which health checks are performed.

If
any regions are specified, then exactly 3 regions should be specified.
The region names must be valid names of Google Cloud regions. This can
only be set for global health check. If this list is non-empty, then
there are restrictions on what other health check fields are supported
and what other resources can use this health check:

* SSL, HTTP2, and GRPC protocols are not supported.

* The TCP request field is not supported.

* The proxyHeader field for HTTP, HTTPS, and TCP is not supported.

* The checkIntervalSec field must be at least 30.

* The health check cannot be used with BackendService nor with managed
instance group auto-healing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#source_regions ComputeHealthCheck#source_regions}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: ComputeHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#ssl_health_check ComputeHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: ComputeHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#tcp_health_check ComputeHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeHealthCheckTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#timeouts ComputeHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#timeout_sec ComputeHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#unhealthy_threshold ComputeHealthCheck#unhealthy_threshold}

---

### ComputeHealthCheckGrpcHealthCheck <a name="ComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckGrpcHealthCheck: computeHealthCheck.ComputeHealthCheckGrpcHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>number</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpcServiceName`<sup>Optional</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:
  - Empty serviceName means the overall status of all services at the backend.
  - Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#grpc_service_name ComputeHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

### ComputeHealthCheckHttp2HealthCheck <a name="ComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckHttp2HealthCheck: computeHealthCheck.ComputeHealthCheckHttp2HealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpHealthCheck <a name="ComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckHttpHealthCheck: computeHealthCheck.ComputeHealthCheckHttpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpsHealthCheck <a name="ComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckHttpsHealthCheck: computeHealthCheck.ComputeHealthCheckHttpsHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckLogConfig <a name="ComputeHealthCheckLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckLogConfig: computeHealthCheck.ComputeHealthCheckLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#enable ComputeHealthCheck#enable}

---

### ComputeHealthCheckSslHealthCheck <a name="ComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckSslHealthCheck: computeHealthCheck.ComputeHealthCheckSslHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTcpHealthCheck <a name="ComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckTcpHealthCheck: computeHealthCheck.ComputeHealthCheckTcpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTimeouts <a name="ComputeHealthCheckTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

const computeHealthCheckTimeouts: computeHealthCheck.ComputeHealthCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#create ComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#update ComputeHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#create ComputeHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_health_check#update ComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHealthCheckGrpcHealthCheckOutputReference <a name="ComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">resetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcServiceName` <a name="resetGrpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```typescript
public resetGrpcServiceName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpcServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcServiceNameInput`<sup>Optional</sup> <a name="grpcServiceNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```typescript
public readonly grpcServiceNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `grpcServiceName`<sup>Required</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---


### ComputeHealthCheckHttp2HealthCheckOutputReference <a name="ComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---


### ComputeHealthCheckHttpHealthCheckOutputReference <a name="ComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---


### ComputeHealthCheckHttpsHealthCheckOutputReference <a name="ComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---


### ComputeHealthCheckLogConfigOutputReference <a name="ComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---


### ComputeHealthCheckSslHealthCheckOutputReference <a name="ComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---


### ComputeHealthCheckTcpHealthCheckOutputReference <a name="ComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---


### ComputeHealthCheckTimeoutsOutputReference <a name="ComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeHealthCheck } from '@cdktf/provider-google'

new computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

---



