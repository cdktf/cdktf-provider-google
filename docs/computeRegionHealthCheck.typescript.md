# `google_compute_region_health_check`

Refer to the Terraform Registory for docs: [`google_compute_region_health_check`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check).

# `computeRegionHealthCheck` Submodule <a name="`computeRegionHealthCheck` Submodule" id="@cdktf/provider-google.computeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthCheck <a name="ComputeRegionHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheck(scope: Construct, id: string, config: ComputeRegionHealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig">ComputeRegionHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig">ComputeRegionHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck">putGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck">putHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck">putHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck">putHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck">putSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck">putTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck">resetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck">resetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck">resetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck">resetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck">resetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck">resetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGrpcHealthCheck` <a name="putGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```typescript
public putGrpcHealthCheck(value: ComputeRegionHealthCheckGrpcHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `putHttp2HealthCheck` <a name="putHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```typescript
public putHttp2HealthCheck(value: ComputeRegionHealthCheckHttp2HealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `putHttpHealthCheck` <a name="putHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck"></a>

```typescript
public putHttpHealthCheck(value: ComputeRegionHealthCheckHttpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `putHttpsHealthCheck` <a name="putHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```typescript
public putHttpsHealthCheck(value: ComputeRegionHealthCheckHttpsHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig"></a>

```typescript
public putLogConfig(value: ComputeRegionHealthCheckLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `putSslHealthCheck` <a name="putSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck"></a>

```typescript
public putSslHealthCheck(value: ComputeRegionHealthCheckSslHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `putTcpHealthCheck` <a name="putTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck"></a>

```typescript
public putTcpHealthCheck(value: ComputeRegionHealthCheckTcpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionHealthCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```typescript
public resetCheckIntervalSec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGrpcHealthCheck` <a name="resetGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```typescript
public resetGrpcHealthCheck(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetHttp2HealthCheck` <a name="resetHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```typescript
public resetHttp2HealthCheck(): void
```

##### `resetHttpHealthCheck` <a name="resetHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```typescript
public resetHttpHealthCheck(): void
```

##### `resetHttpsHealthCheck` <a name="resetHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```typescript
public resetHttpsHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSslHealthCheck` <a name="resetSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck"></a>

```typescript
public resetSslHealthCheck(): void
```

##### `resetTcpHealthCheck` <a name="resetTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```typescript
public resetTcpHealthCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput">grpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput">http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput">httpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput">httpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput">sslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput">tcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `grpcHealthCheck`<sup>Required</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: ComputeRegionHealthCheckGrpcHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `http2HealthCheck`<sup>Required</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: ComputeRegionHealthCheckHttp2HealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: ComputeRegionHealthCheckHttpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `httpsHealthCheck`<sup>Required</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: ComputeRegionHealthCheckHttpsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeRegionHealthCheckLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sslHealthCheck`<sup>Required</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: ComputeRegionHealthCheckSslHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcpHealthCheck`<sup>Required</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: ComputeRegionHealthCheckTcpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```typescript
public readonly checkIntervalSecInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `grpcHealthCheckInput`<sup>Optional</sup> <a name="grpcHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```typescript
public readonly grpcHealthCheckInput: ComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `http2HealthCheckInput`<sup>Optional</sup> <a name="http2HealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```typescript
public readonly http2HealthCheckInput: ComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `httpHealthCheckInput`<sup>Optional</sup> <a name="httpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```typescript
public readonly httpHealthCheckInput: ComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `httpsHealthCheckInput`<sup>Optional</sup> <a name="httpsHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```typescript
public readonly httpsHealthCheckInput: ComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: ComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sslHealthCheckInput`<sup>Optional</sup> <a name="sslHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```typescript
public readonly sslHealthCheckInput: ComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `tcpHealthCheckInput`<sup>Optional</sup> <a name="tcpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```typescript
public readonly tcpHealthCheckInput: ComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeRegionHealthCheckTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a> | cdktf.IResolvable

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthCheckConfig <a name="ComputeRegionHealthCheckConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckConfig: computeRegionHealthCheck.ComputeRegionHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#name ComputeRegionHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#check_interval_sec ComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#description ComputeRegionHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: ComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#grpc_health_check ComputeRegionHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#healthy_threshold ComputeRegionHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: ComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#http2_health_check ComputeRegionHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: ComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#http_health_check ComputeRegionHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: ComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#https_health_check ComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#log_config ComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#region ComputeRegionHealthCheck#region}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: ComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#ssl_health_check ComputeRegionHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: ComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#tcp_health_check ComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthCheckTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#timeouts ComputeRegionHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#timeout_sec ComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#unhealthy_threshold ComputeRegionHealthCheck#unhealthy_threshold}

---

### ComputeRegionHealthCheckGrpcHealthCheck <a name="ComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckGrpcHealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>number</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpcServiceName`<sup>Optional</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

Empty serviceName means the overall status of all services at the backend.
Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#grpc_service_name ComputeRegionHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

### ComputeRegionHealthCheckHttp2HealthCheck <a name="ComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckHttp2HealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpHealthCheck <a name="ComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckHttpHealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpsHealthCheck <a name="ComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckHttpsHealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckLogConfig <a name="ComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckLogConfig: computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#enable ComputeRegionHealthCheck#enable}

---

### ComputeRegionHealthCheckSslHealthCheck <a name="ComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckSslHealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTcpHealthCheck <a name="ComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckTcpHealthCheck: computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

'USE_FIXED_PORT': The port number in 'port' is used for health checking.

'USE_NAMED_PORT': The 'portName' is used for health checking.

'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
network endpoint is used for health checking. For other backends, the
port or named port specified in the Backend Service is used for health
checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTimeouts <a name="ComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

const computeRegionHealthCheckTimeouts: computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#create ComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#delete ComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#update ComputeRegionHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#create ComputeRegionHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#delete ComputeRegionHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/compute_region_health_check#update ComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="ComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">resetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcServiceName` <a name="resetGrpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```typescript
public resetGrpcServiceName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpcServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcServiceNameInput`<sup>Optional</sup> <a name="grpcServiceNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```typescript
public readonly grpcServiceNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `grpcServiceName`<sup>Required</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---


### ComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="ComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---


### ComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---


### ComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---


### ComputeRegionHealthCheckLogConfigOutputReference <a name="ComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---


### ComputeRegionHealthCheckSslHealthCheckOutputReference <a name="ComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---


### ComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="ComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---


### ComputeRegionHealthCheckTimeoutsOutputReference <a name="ComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthCheck } from '@cdktf/provider-google'

new computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionHealthCheckTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a> | cdktf.IResolvable

---



