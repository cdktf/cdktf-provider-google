# `computeBackendService` Submodule <a name="`computeBackendService` Submodule" id="@cdktf/provider-google.computeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendService <a name="ComputeBackendService" id="@cdktf/provider-google.computeBackendService.ComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendService(scope: Construct, id: string, config: ComputeBackendServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig">ComputeBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig">ComputeBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers">putCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash">putConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies">putLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putMaxStreamDuration">putMaxStreamDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection">putOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie">putStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putTlsSettings">putTlsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec">resetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers">resetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec">resetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash">resetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders">resetCustomRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetExternalManagedMigrationState">resetExternalManagedMigrationState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetExternalManagedMigrationTestingPercentage">resetExternalManagedMigrationTestingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIpAddressSelectionPolicy">resetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies">resetLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy">resetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetMaxStreamDuration">resetMaxStreamDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection">resetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetServiceLbPolicy">resetServiceLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetStrongSessionAffinityCookie">resetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTlsSettings">resetTlsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend"></a>

```typescript
public putBackend(value: IResolvable | ComputeBackendServiceBackend[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy"></a>

```typescript
public putCdnPolicy(value: ComputeBackendServiceCdnPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---

##### `putCircuitBreakers` <a name="putCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers"></a>

```typescript
public putCircuitBreakers(value: ComputeBackendServiceCircuitBreakers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---

##### `putConsistentHash` <a name="putConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash"></a>

```typescript
public putConsistentHash(value: ComputeBackendServiceConsistentHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCustomMetrics"></a>

```typescript
public putCustomMetrics(value: IResolvable | ComputeBackendServiceCustomMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCustomMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap"></a>

```typescript
public putIap(value: ComputeBackendServiceIap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---

##### `putLocalityLbPolicies` <a name="putLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies"></a>

```typescript
public putLocalityLbPolicies(value: IResolvable | ComputeBackendServiceLocalityLbPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig"></a>

```typescript
public putLogConfig(value: ComputeBackendServiceLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---

##### `putMaxStreamDuration` <a name="putMaxStreamDuration" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putMaxStreamDuration"></a>

```typescript
public putMaxStreamDuration(value: ComputeBackendServiceMaxStreamDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putMaxStreamDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a>

---

##### `putOutlierDetection` <a name="putOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection"></a>

```typescript
public putOutlierDetection(value: ComputeBackendServiceOutlierDetection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings"></a>

```typescript
public putSecuritySettings(value: ComputeBackendServiceSecuritySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---

##### `putStrongSessionAffinityCookie` <a name="putStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie"></a>

```typescript
public putStrongSessionAffinityCookie(value: ComputeBackendServiceStrongSessionAffinityCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeBackendServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---

##### `putTlsSettings` <a name="putTlsSettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTlsSettings"></a>

```typescript
public putTlsSettings(value: ComputeBackendServiceTlsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTlsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a>

---

##### `resetAffinityCookieTtlSec` <a name="resetAffinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec"></a>

```typescript
public resetAffinityCookieTtlSec(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy"></a>

```typescript
public resetCdnPolicy(): void
```

##### `resetCircuitBreakers` <a name="resetCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers"></a>

```typescript
public resetCircuitBreakers(): void
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode"></a>

```typescript
public resetCompressionMode(): void
```

##### `resetConnectionDrainingTimeoutSec` <a name="resetConnectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```typescript
public resetConnectionDrainingTimeoutSec(): void
```

##### `resetConsistentHash` <a name="resetConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash"></a>

```typescript
public resetConsistentHash(): void
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomMetrics"></a>

```typescript
public resetCustomMetrics(): void
```

##### `resetCustomRequestHeaders` <a name="resetCustomRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders"></a>

```typescript
public resetCustomRequestHeaders(): void
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders"></a>

```typescript
public resetCustomResponseHeaders(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy"></a>

```typescript
public resetEdgeSecurityPolicy(): void
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn"></a>

```typescript
public resetEnableCdn(): void
```

##### `resetExternalManagedMigrationState` <a name="resetExternalManagedMigrationState" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetExternalManagedMigrationState"></a>

```typescript
public resetExternalManagedMigrationState(): void
```

##### `resetExternalManagedMigrationTestingPercentage` <a name="resetExternalManagedMigrationTestingPercentage" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetExternalManagedMigrationTestingPercentage"></a>

```typescript
public resetExternalManagedMigrationTestingPercentage(): void
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks"></a>

```typescript
public resetHealthChecks(): void
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap"></a>

```typescript
public resetIap(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressSelectionPolicy` <a name="resetIpAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIpAddressSelectionPolicy"></a>

```typescript
public resetIpAddressSelectionPolicy(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetLocalityLbPolicies` <a name="resetLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies"></a>

```typescript
public resetLocalityLbPolicies(): void
```

##### `resetLocalityLbPolicy` <a name="resetLocalityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy"></a>

```typescript
public resetLocalityLbPolicy(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetMaxStreamDuration` <a name="resetMaxStreamDuration" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetMaxStreamDuration"></a>

```typescript
public resetMaxStreamDuration(): void
```

##### `resetOutlierDetection` <a name="resetOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection"></a>

```typescript
public resetOutlierDetection(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetServiceLbPolicy` <a name="resetServiceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetServiceLbPolicy"></a>

```typescript
public resetServiceLbPolicy(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetStrongSessionAffinityCookie` <a name="resetStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetStrongSessionAffinityCookie"></a>

```typescript
public resetStrongSessionAffinityCookie(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

##### `resetTlsSettings` <a name="resetTlsSettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTlsSettings"></a>

```typescript
public resetTlsSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

computeBackendService.ComputeBackendService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

computeBackendService.ComputeBackendService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

computeBackendService.ComputeBackendService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

computeBackendService.ComputeBackendService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList">ComputeBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId">generatedId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies">localityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.maxStreamDuration">maxStreamDuration</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference">ComputeBackendServiceMaxStreamDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference">ComputeBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference">ComputeBackendServiceTlsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput">affinityCookieTtlSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput">backendInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput">circuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput">compressionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput">connectionDrainingTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput">consistentHashInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customMetricsInput">customMetricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput">customRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput">enableCdnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationStateInput">externalManagedMigrationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationTestingPercentageInput">externalManagedMigrationTestingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput">healthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicyInput">ipAddressSelectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput">localityLbPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput">localityLbPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.maxStreamDurationInput">maxStreamDurationInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput">outlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicyInput">serviceLbPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookieInput">strongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tlsSettingsInput">tlsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode">compressionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders">customRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationState">externalManagedMigrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationTestingPercentage">externalManagedMigrationTestingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks">healthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend"></a>

```typescript
public readonly backend: ComputeBackendServiceBackendList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: ComputeBackendServiceCdnPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers"></a>

```typescript
public readonly circuitBreakers: ComputeBackendServiceCircuitBreakersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash"></a>

```typescript
public readonly consistentHash: ComputeBackendServiceConsistentHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customMetrics"></a>

```typescript
public readonly customMetrics: ComputeBackendServiceCustomMetricsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList">ComputeBackendServiceCustomMetricsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId"></a>

```typescript
public readonly generatedId: number;
```

- *Type:* number

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap"></a>

```typescript
public readonly iap: ComputeBackendServiceIapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a>

---

##### `localityLbPolicies`<sup>Required</sup> <a name="localityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies"></a>

```typescript
public readonly localityLbPolicies: ComputeBackendServiceLocalityLbPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeBackendServiceLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a>

---

##### `maxStreamDuration`<sup>Required</sup> <a name="maxStreamDuration" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.maxStreamDuration"></a>

```typescript
public readonly maxStreamDuration: ComputeBackendServiceMaxStreamDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference">ComputeBackendServiceMaxStreamDurationOutputReference</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection"></a>

```typescript
public readonly outlierDetection: ComputeBackendServiceOutlierDetectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings"></a>

```typescript
public readonly securitySettings: ComputeBackendServiceSecuritySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookie"></a>

```typescript
public readonly strongSessionAffinityCookie: ComputeBackendServiceStrongSessionAffinityCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference">ComputeBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a>

---

##### `tlsSettings`<sup>Required</sup> <a name="tlsSettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tlsSettings"></a>

```typescript
public readonly tlsSettings: ComputeBackendServiceTlsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference">ComputeBackendServiceTlsSettingsOutputReference</a>

---

##### `affinityCookieTtlSecInput`<sup>Optional</sup> <a name="affinityCookieTtlSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput"></a>

```typescript
public readonly affinityCookieTtlSecInput: number;
```

- *Type:* number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput"></a>

```typescript
public readonly backendInput: IResolvable | ComputeBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput"></a>

```typescript
public readonly cdnPolicyInput: ComputeBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---

##### `circuitBreakersInput`<sup>Optional</sup> <a name="circuitBreakersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput"></a>

```typescript
public readonly circuitBreakersInput: ComputeBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput"></a>

```typescript
public readonly compressionModeInput: string;
```

- *Type:* string

---

##### `connectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```typescript
public readonly connectionDrainingTimeoutSecInput: number;
```

- *Type:* number

---

##### `consistentHashInput`<sup>Optional</sup> <a name="consistentHashInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput"></a>

```typescript
public readonly consistentHashInput: ComputeBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customMetricsInput"></a>

```typescript
public readonly customMetricsInput: IResolvable | ComputeBackendServiceCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]

---

##### `customRequestHeadersInput`<sup>Optional</sup> <a name="customRequestHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput"></a>

```typescript
public readonly customRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput"></a>

```typescript
public readonly customResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput"></a>

```typescript
public readonly edgeSecurityPolicyInput: string;
```

- *Type:* string

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput"></a>

```typescript
public readonly enableCdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalManagedMigrationStateInput`<sup>Optional</sup> <a name="externalManagedMigrationStateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationStateInput"></a>

```typescript
public readonly externalManagedMigrationStateInput: string;
```

- *Type:* string

---

##### `externalManagedMigrationTestingPercentageInput`<sup>Optional</sup> <a name="externalManagedMigrationTestingPercentageInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationTestingPercentageInput"></a>

```typescript
public readonly externalManagedMigrationTestingPercentageInput: number;
```

- *Type:* number

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput"></a>

```typescript
public readonly healthChecksInput: string[];
```

- *Type:* string[]

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput"></a>

```typescript
public readonly iapInput: ComputeBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressSelectionPolicyInput`<sup>Optional</sup> <a name="ipAddressSelectionPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicyInput"></a>

```typescript
public readonly ipAddressSelectionPolicyInput: string;
```

- *Type:* string

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `localityLbPoliciesInput`<sup>Optional</sup> <a name="localityLbPoliciesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput"></a>

```typescript
public readonly localityLbPoliciesInput: IResolvable | ComputeBackendServiceLocalityLbPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]

---

##### `localityLbPolicyInput`<sup>Optional</sup> <a name="localityLbPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput"></a>

```typescript
public readonly localityLbPolicyInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: ComputeBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---

##### `maxStreamDurationInput`<sup>Optional</sup> <a name="maxStreamDurationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.maxStreamDurationInput"></a>

```typescript
public readonly maxStreamDurationInput: ComputeBackendServiceMaxStreamDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outlierDetectionInput`<sup>Optional</sup> <a name="outlierDetectionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput"></a>

```typescript
public readonly outlierDetectionInput: ComputeBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: ComputeBackendServiceSecuritySettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---

##### `serviceLbPolicyInput`<sup>Optional</sup> <a name="serviceLbPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicyInput"></a>

```typescript
public readonly serviceLbPolicyInput: string;
```

- *Type:* string

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `strongSessionAffinityCookieInput`<sup>Optional</sup> <a name="strongSessionAffinityCookieInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookieInput"></a>

```typescript
public readonly strongSessionAffinityCookieInput: ComputeBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeBackendServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---

##### `tlsSettingsInput`<sup>Optional</sup> <a name="tlsSettingsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tlsSettingsInput"></a>

```typescript
public readonly tlsSettingsInput: ComputeBackendServiceTlsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a>

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec"></a>

```typescript
public readonly affinityCookieTtlSec: number;
```

- *Type:* number

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```typescript
public readonly connectionDrainingTimeoutSec: number;
```

- *Type:* number

---

##### `customRequestHeaders`<sup>Required</sup> <a name="customRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders"></a>

```typescript
public readonly customRequestHeaders: string[];
```

- *Type:* string[]

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalManagedMigrationState`<sup>Required</sup> <a name="externalManagedMigrationState" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationState"></a>

```typescript
public readonly externalManagedMigrationState: string;
```

- *Type:* string

---

##### `externalManagedMigrationTestingPercentage`<sup>Required</sup> <a name="externalManagedMigrationTestingPercentage" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.externalManagedMigrationTestingPercentage"></a>

```typescript
public readonly externalManagedMigrationTestingPercentage: number;
```

- *Type:* number

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks"></a>

```typescript
public readonly healthChecks: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicy"></a>

```typescript
public readonly ipAddressSelectionPolicy: string;
```

- *Type:* string

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy"></a>

```typescript
public readonly localityLbPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `serviceLbPolicy`<sup>Required</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicy"></a>

```typescript
public readonly serviceLbPolicy: string;
```

- *Type:* string

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceBackend <a name="ComputeBackendServiceBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceBackend: computeBackendService.ComputeBackendServiceBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group">group</a></code> | <code>string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode">balancingMode</a></code> | <code>string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler">capacityScaler</a></code> | <code>number</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.customMetrics">customMetrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections">maxConnections</a></code> | <code>number</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>number</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>number</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate">maxRate</a></code> | <code>number</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>number</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>number</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.preference">preference</a></code> | <code>string</code> | This field indicates whether this backend should be fully utilized before sending traffic to backends with default preference. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#group ComputeBackendService#group}

---

##### `balancingMode`<sup>Optional</sup> <a name="balancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode"></a>

```typescript
public readonly balancingMode: string;
```

- *Type:* string

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S)),
CUSTOM_METRICS (for HTTP(s)) and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION", "CUSTOM_METRICS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#balancing_mode ComputeBackendService#balancing_mode}

---

##### `capacityScaler`<sup>Optional</sup> <a name="capacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler"></a>

```typescript
public readonly capacityScaler: number;
```

- *Type:* number

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#capacity_scaler ComputeBackendService#capacity_scaler}

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.customMetrics"></a>

```typescript
public readonly customMetrics: IResolvable | ComputeBackendServiceBackendCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_metrics ComputeBackendService#custom_metrics}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `maxConnectionsPerEndpoint`<sup>Optional</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```typescript
public readonly maxConnectionsPerEndpoint: number;
```

- *Type:* number

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections_per_endpoint ComputeBackendService#max_connections_per_endpoint}

---

##### `maxConnectionsPerInstance`<sup>Optional</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```typescript
public readonly maxConnectionsPerInstance: number;
```

- *Type:* number

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections_per_instance ComputeBackendService#max_connections_per_instance}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate ComputeBackendService#max_rate}

---

##### `maxRatePerEndpoint`<sup>Optional</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```typescript
public readonly maxRatePerEndpoint: number;
```

- *Type:* number

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate_per_endpoint ComputeBackendService#max_rate_per_endpoint}

---

##### `maxRatePerInstance`<sup>Optional</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```typescript
public readonly maxRatePerInstance: number;
```

- *Type:* number

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate_per_instance ComputeBackendService#max_rate_per_instance}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

This field indicates whether this backend should be fully utilized before sending traffic to backends with default preference.

This field cannot be set when loadBalancingScheme is set to 'EXTERNAL'. The possible values are:
  - PREFERRED: Backends with this preference level will be filled up to their capacity limits first,
    based on RTT.
  - DEFAULT: If preferred backends don't have enough capacity, backends in this layer would be used and
    traffic would be assigned based on the load balancing algorithm you use. This is the default Possible values: ["PREFERRED", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#preference ComputeBackendService#preference}

---

### ComputeBackendServiceBackendCustomMetrics <a name="ComputeBackendServiceBackendCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceBackendCustomMetrics: computeBackendService.ComputeBackendServiceBackendCustomMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the metric data is collected and reported to Cloud Monitoring, but is not used for load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.name">name</a></code> | <code>string</code> | Name of a custom utilization signal. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | Optional parameter to define a target utilization for the Custom Metrics balancing mode. The valid range is <code>[0.0, 1.0]</code>. |

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the metric data is collected and reported to Cloud Monitoring, but is not used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dry_run ComputeBackendService#dry_run}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of a custom utilization signal.

The name must be 1-64 characters
long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
means the first character must be a lowercase letter, and all following
characters must be a dash, period, underscore, lowercase letter, or
digit, except the last character, which cannot be a dash, period, or
underscore. For usage guidelines, see Custom Metrics balancing mode. This
field can only be used for a global or regional backend service with the
loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
<code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

Optional parameter to define a target utilization for the Custom Metrics balancing mode. The valid range is <code>[0.0, 1.0]</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}

---

### ComputeBackendServiceCdnPolicy <a name="ComputeBackendServiceCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCdnPolicy: computeBackendService.ComputeBackendServiceCdnPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: IResolvable | ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#bypass_cache_on_request_headers ComputeBackendService#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: ComputeBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cache_mode ComputeBackendService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#client_ttl ComputeBackendService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#default_ttl ComputeBackendService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_ttl ComputeBackendService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#negative_caching ComputeBackendService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: IResolvable | ComputeBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}

---

##### `requestCoalescing`<sup>Optional</sup> <a name="requestCoalescing" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#request_coalescing ComputeBackendService#request_coalescing}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}

---

### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCdnPolicyBypassCacheOnRequestHeaders: computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#header_name ComputeBackendService#header_name}

---

### ComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCdnPolicyCacheKeyPolicy: computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">includeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">includeNamedCookies</a></code> | <code>string[]</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">includeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>string[]</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. |

---

##### `includeHost`<sup>Optional</sup> <a name="includeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```typescript
public readonly includeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_host ComputeBackendService#include_host}

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_http_headers ComputeBackendService#include_http_headers}

---

##### `includeNamedCookies`<sup>Optional</sup> <a name="includeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```typescript
public readonly includeNamedCookies: string[];
```

- *Type:* string[]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_named_cookies ComputeBackendService#include_named_cookies}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_protocol ComputeBackendService#include_protocol}

---

##### `includeQueryString`<sup>Optional</sup> <a name="includeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```typescript
public readonly includeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_query_string ComputeBackendService#include_query_string}

---

##### `queryStringBlacklist`<sup>Optional</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```typescript
public readonly queryStringBlacklist: string[];
```

- *Type:* string[]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}

---

### ComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCdnPolicyNegativeCachingPolicy: computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#code ComputeBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceCircuitBreakers <a name="ComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCircuitBreakers: computeBackendService.ComputeBackendServiceCircuitBreakers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections">maxConnections</a></code> | <code>number</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests">maxRequests</a></code> | <code>number</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>number</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}

---

##### `maxRequests`<sup>Optional</sup> <a name="maxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_requests ComputeBackendService#max_requests}

---

##### `maxRequestsPerConnection`<sup>Optional</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```typescript
public readonly maxRequestsPerConnection: number;
```

- *Type:* number

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_retries ComputeBackendService#max_retries}

---

### ComputeBackendServiceConfig <a name="ComputeBackendServiceConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceConfig: computeBackendService.ComputeBackendServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend">backend</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode">compressionMode</a></code> | <code>string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customMetrics">customMetrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders">customRequestHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.externalManagedMigrationState">externalManagedMigrationState</a></code> | <code>string</code> | Specifies the canary migration state. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.externalManagedMigrationTestingPercentage">externalManagedMigrationTestingPercentage</a></code> | <code>number</code> | Determines the fraction of requests that should be processed by the Global external Application Load Balancer. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks">healthChecks</a></code> | <code>string[]</code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#id ComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>string</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies">localityLbPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]</code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy">localityLbPolicy</a></code> | <code>string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.maxStreamDuration">maxStreamDuration</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a></code> | max_stream_duration block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName">portName</a></code> | <code>string</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#project ComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>string</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a></code> | tls_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```typescript
public readonly affinityCookieTtlSec: number;
```

- *Type:* number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend"></a>

```typescript
public readonly backend: IResolvable | ComputeBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: ComputeBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers"></a>

```typescript
public readonly circuitBreakers: ComputeBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```typescript
public readonly connectionDrainingTimeoutSec: number;
```

- *Type:* number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash"></a>

```typescript
public readonly consistentHash: ComputeBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customMetrics"></a>

```typescript
public readonly customMetrics: IResolvable | ComputeBackendServiceCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_metrics ComputeBackendService#custom_metrics}

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders"></a>

```typescript
public readonly customRequestHeaders: string[];
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}

---

##### `externalManagedMigrationState`<sup>Optional</sup> <a name="externalManagedMigrationState" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.externalManagedMigrationState"></a>

```typescript
public readonly externalManagedMigrationState: string;
```

- *Type:* string

Specifies the canary migration state. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC.

To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to
PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be
changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate
traffic by percentage using externalManagedMigrationTestingPercentage.

Rolling back a migration requires the states to be set in reverse order. So changing the
scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at
the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic
back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL. Possible values: ["PREPARE", "TEST_BY_PERCENTAGE", "TEST_ALL_TRAFFIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#external_managed_migration_state ComputeBackendService#external_managed_migration_state}

---

##### `externalManagedMigrationTestingPercentage`<sup>Optional</sup> <a name="externalManagedMigrationTestingPercentage" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.externalManagedMigrationTestingPercentage"></a>

```typescript
public readonly externalManagedMigrationTestingPercentage: number;
```

- *Type:* number

Determines the fraction of requests that should be processed by the Global external Application Load Balancer.

The value of this field must be in the range [0, 100].

Session affinity options will slightly affect this routing behavior, for more details,
see: Session Affinity.

This value can only be set if the loadBalancingScheme in the backend service is set to
EXTERNAL (when using the Classic ALB) and the migration state is TEST_BY_PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#external_managed_migration_testing_percentage ComputeBackendService#external_managed_migration_testing_percentage}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks"></a>

```typescript
public readonly healthChecks: string[];
```

- *Type:* string[]

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap"></a>

```typescript
public readonly iap: ComputeBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#id ComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```typescript
public readonly ipAddressSelectionPolicy: string;
```

- *Type:* string

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ip_address_selection_policy ComputeBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}

---

##### `localityLbPolicies`<sup>Optional</sup> <a name="localityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies"></a>

```typescript
public readonly localityLbPolicies: IResolvable | ComputeBackendServiceLocalityLbPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy"></a>

```typescript
public readonly localityLbPolicy: string;
```

- *Type:* string

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
                 is selected in round robin order.

* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
                   hosts and picks the host which has fewer active requests.

* 'RING_HASH': The ring/modulo hash load balancer implements consistent
               hashing to backends. The algorithm has the property that the
               addition/removal of a host from a set of N hosts only affects
               1/N of the requests.

* 'RANDOM': The load balancer selects a random healthy host.

* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
                          connection metadata, i.e., connections are opened
                          to the same address as the destination address of
                          the incoming connection before the connection
                          was redirected to the load balancer.

* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
            Maglev is not as stable as ring hash but has faster table lookup
            build times and host selection times. For more information about
            Maglev, refer to https://ai.google/research/pubs/pub44824

* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
                     reported weights. Only applicable to loadBalancingScheme
                     EXTERNAL. If set, the Backend Service must
                     configure a non legacy HTTP-based Health Check, and
                     health check replies are expected to contain
                     non-standard HTTP response header field
                     X-Load-Balancing-Endpoint-Weight to specify the
                     per-instance weights. If set, Load Balancing is weight
                     based on the per-instance weights reported in the last
                     processed health check replies, as long as every
                     instance either reported a valid weight or had
                     UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
                     equal-weight.

* 'WEIGHTED_ROUND_ROBIN': Per-endpoint weighted round-robin Load Balancing using weights computed
                          from Backend reported Custom Metrics. If set, the Backend Service
                          responses are expected to contain non-standard HTTP response header field
                          X-Endpoint-Load-Metrics. The reported metrics
                          to use for computing the weights are specified via the
                          backends[].customMetrics fields.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV", "WEIGHTED_ROUND_ROBIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}

---

##### `maxStreamDuration`<sup>Optional</sup> <a name="maxStreamDuration" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.maxStreamDuration"></a>

```typescript
public readonly maxStreamDuration: ComputeBackendServiceMaxStreamDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a>

max_stream_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_stream_duration ComputeBackendService#max_stream_duration}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection"></a>

```typescript
public readonly outlierDetection: ComputeBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#project ComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol this BackendService uses to communicate with backends.

The default is HTTP. Possible values are HTTP, HTTPS, HTTP2, H2C, TCP, SSL, UDP
or GRPC. Refer to the documentation for the load balancers or for Traffic Director
for more information. Must be set to GRPC when the backend service is referenced
by a URL map that is bound to target gRPC proxy. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "UDP", "GRPC", "UNSPECIFIED", "H2C"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: ComputeBackendServiceSecuritySettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}

---

##### `serviceLbPolicy`<sup>Optional</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.serviceLbPolicy"></a>

```typescript
public readonly serviceLbPolicy: string;
```

- *Type:* string

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#service_lb_policy ComputeBackendService#service_lb_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```typescript
public readonly strongSessionAffinityCookie: ComputeBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#strong_session_affinity_cookie ComputeBackendService#strong_session_affinity_cookie}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}

---

##### `tlsSettings`<sup>Optional</sup> <a name="tlsSettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.tlsSettings"></a>

```typescript
public readonly tlsSettings: ComputeBackendServiceTlsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a>

tls_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#tls_settings ComputeBackendService#tls_settings}

---

### ComputeBackendServiceConsistentHash <a name="ComputeBackendServiceConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceConsistentHash: computeBackendService.ComputeBackendServiceConsistentHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `httpCookie`<sup>Optional</sup> <a name="httpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie"></a>

```typescript
public readonly httpCookie: ComputeBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#http_cookie ComputeBackendService#http_cookie}

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#http_header_name ComputeBackendService#http_header_name}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}

---

### ComputeBackendServiceConsistentHashHttpCookie <a name="ComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceConsistentHashHttpCookie: computeBackendService.ComputeBackendServiceConsistentHashHttpCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```typescript
public readonly ttl: ComputeBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceConsistentHashHttpCookieTtl <a name="ComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceConsistentHashHttpCookieTtl: computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceCustomMetrics <a name="ComputeBackendServiceCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceCustomMetrics: computeBackendService.ComputeBackendServiceCustomMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the metric data is not used for load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics.property.name">name</a></code> | <code>string</code> | Name of a custom utilization signal. |

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the metric data is not used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dry_run ComputeBackendService#dry_run}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of a custom utilization signal.

The name must be 1-64 characters
long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
means the first character must be a lowercase letter, and all following
characters must be a dash, period, underscore, lowercase letter, or
digit, except the last character, which cannot be a dash, period, or
underscore. For usage guidelines, see Custom Metrics balancing mode. This
field can only be used for a global or regional backend service with the
loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
<code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

### ComputeBackendServiceIap <a name="ComputeBackendServiceIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceIap: computeBackendService.ComputeBackendServiceIap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | OAuth2 Client Secret for IAP. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enabled ComputeBackendService#enabled}

---

##### `oauth2ClientId`<sup>Optional</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Optional</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}

---

### ComputeBackendServiceLocalityLbPolicies <a name="ComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceLocalityLbPolicies: computeBackendService.ComputeBackendServiceLocalityLbPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```typescript
public readonly customPolicy: ComputeBackendServiceLocalityLbPoliciesCustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_policy ComputeBackendService#custom_policy}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```typescript
public readonly policy: ComputeBackendServiceLocalityLbPoliciesPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#policy ComputeBackendService#policy}

---

### ComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceLocalityLbPoliciesCustomPolicy: computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">name</a></code> | <code>string</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">data</a></code> | <code>string</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#data ComputeBackendService#data}

---

### ComputeBackendServiceLocalityLbPoliciesPolicy <a name="ComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceLocalityLbPoliciesPolicy: computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name">name</a></code> | <code>string</code> | The name of a locality load balancer policy to be used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
                is selected in round robin order.

* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
                  hosts and picks the host which has fewer active requests.

* 'RING_HASH': The ring/modulo hash load balancer implements consistent
              hashing to backends. The algorithm has the property that the
              addition/removal of a host from a set of N hosts only affects
              1/N of the requests.

* 'RANDOM': The load balancer selects a random healthy host.

* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
                          connection metadata, i.e., connections are opened
                          to the same address as the destination address of
                          the incoming connection before the connection
                          was redirected to the load balancer.

* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
            Maglev is not as stable as ring hash but has faster table lookup
            build times and host selection times. For more information about
            Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

### ComputeBackendServiceLogConfig <a name="ComputeBackendServiceLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceLogConfig: computeBackendService.ComputeBackendServiceLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | This field can only be specified if logging is enabled for this backend service and "logConfig.optionalMode" was set to CUSTOM. Contains a list of optional fields you want to include in the logs. For example: serverInstance, serverGkeDetails.cluster, serverGkeDetails.pod.podNamespace For example: orca_load_report, tls.protocol. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.optionalMode">optionalMode</a></code> | <code>string</code> | Specifies the optional logging mode for the load balancer traffic. Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>number</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enable ComputeBackendService#enable}

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

This field can only be specified if logging is enabled for this backend service and "logConfig.optionalMode" was set to CUSTOM. Contains a list of optional fields you want to include in the logs. For example: serverInstance, serverGkeDetails.cluster, serverGkeDetails.pod.podNamespace For example: orca_load_report, tls.protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#optional_fields ComputeBackendService#optional_fields}

---

##### `optionalMode`<sup>Optional</sup> <a name="optionalMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.optionalMode"></a>

```typescript
public readonly optionalMode: string;
```

- *Type:* string

Specifies the optional logging mode for the load balancer traffic. Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#optional_mode ComputeBackendService#optional_mode}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#sample_rate ComputeBackendService#sample_rate}

---

### ComputeBackendServiceMaxStreamDuration <a name="ComputeBackendServiceMaxStreamDuration" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceMaxStreamDuration: computeBackendService.ComputeBackendServiceMaxStreamDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration.property.seconds">seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. (int64 format). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field.
Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceOutlierDetection <a name="ComputeBackendServiceOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceOutlierDetection: computeBackendService.ComputeBackendServiceOutlierDetection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors">consecutiveErrors</a></code> | <code>number</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>number</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>number</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>number</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>number</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: ComputeBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}

---

##### `consecutiveErrors`<sup>Optional</sup> <a name="consecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```typescript
public readonly consecutiveErrors: number;
```

- *Type:* number

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}

---

##### `consecutiveGatewayFailure`<sup>Optional</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```typescript
public readonly consecutiveGatewayFailure: number;
```

- *Type:* number

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}

---

##### `enforcingConsecutiveErrors`<sup>Optional</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```typescript
public readonly enforcingConsecutiveErrors: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}

---

##### `enforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailure: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcingSuccessRate`<sup>Optional</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```typescript
public readonly enforcingSuccessRate: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval"></a>

```typescript
public readonly interval: ComputeBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#interval ComputeBackendService#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}

---

##### `successRateMinimumHosts`<sup>Optional</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```typescript
public readonly successRateMinimumHosts: number;
```

- *Type:* number

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}

---

##### `successRateRequestVolume`<sup>Optional</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```typescript
public readonly successRateRequestVolume: number;
```

- *Type:* number

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}

---

##### `successRateStdevFactor`<sup>Optional</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```typescript
public readonly successRateStdevFactor: number;
```

- *Type:* number

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}

---

### ComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceOutlierDetectionBaseEjectionTime: computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceOutlierDetectionInterval <a name="ComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceOutlierDetectionInterval: computeBackendService.ComputeBackendServiceOutlierDetectionInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceSecuritySettings <a name="ComputeBackendServiceSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceSecuritySettings: computeBackendService.ComputeBackendServiceSecuritySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>string</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames">subjectAltNames</a></code> | <code>string[]</code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `awsV4Authentication`<sup>Optional</sup> <a name="awsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.awsV4Authentication"></a>

```typescript
public readonly awsV4Authentication: ComputeBackendServiceSecuritySettingsAwsV4Authentication;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#aws_v4_authentication ComputeBackendService#aws_v4_authentication}

---

##### `clientTlsPolicy`<sup>Optional</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```typescript
public readonly clientTlsPolicy: string;
```

- *Type:* string

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#client_tls_policy ComputeBackendService#client_tls_policy}

---

##### `subjectAltNames`<sup>Optional</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```typescript
public readonly subjectAltNames: string[];
```

- *Type:* string[]

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}

---

### ComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="ComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceSecuritySettingsAwsV4Authentication: computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey">accessKey</a></code> | <code>string</code> | The access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | The identifier of an access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion">accessKeyVersion</a></code> | <code>string</code> | The optional version identifier for the access key. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion">originRegion</a></code> | <code>string</code> | The name of the cloud region of your origin. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The access key used for s3 bucket authentication.

Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key ComputeBackendService#access_key}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

The identifier of an access key used for s3 bucket authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key_id ComputeBackendService#access_key_id}

---

##### `accessKeyVersion`<sup>Optional</sup> <a name="accessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion"></a>

```typescript
public readonly accessKeyVersion: string;
```

- *Type:* string

The optional version identifier for the access key.

You can use this to keep track of different iterations of your access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key_version ComputeBackendService#access_key_version}

---

##### `originRegion`<sup>Optional</sup> <a name="originRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion"></a>

```typescript
public readonly originRegion: string;
```

- *Type:* string

The name of the cloud region of your origin.

This is a free-form field with the name of the region your cloud uses to host your origin.
For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#origin_region ComputeBackendService#origin_region}

---

### ComputeBackendServiceStrongSessionAffinityCookie <a name="ComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceStrongSessionAffinityCookie: computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.name">name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.path">path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```typescript
public readonly ttl: ComputeBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceStrongSessionAffinityCookieTtl <a name="ComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceStrongSessionAffinityCookieTtl: computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceTimeouts <a name="ComputeBackendServiceTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceTimeouts: computeBackendService.ComputeBackendServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#create ComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#update ComputeBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#create ComputeBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#update ComputeBackendService#update}.

---

### ComputeBackendServiceTlsSettings <a name="ComputeBackendServiceTlsSettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceTlsSettings: computeBackendService.ComputeBackendServiceTlsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.authenticationConfig">authenticationConfig</a></code> | <code>string</code> | Reference to the BackendAuthenticationConfig resource from the networksecurity.googleapis.com namespace. Can be used in authenticating TLS connections to the backend, as specified by the authenticationMode field. Can only be specified if authenticationMode is not NONE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.sni">sni</a></code> | <code>string</code> | Server Name Indication - see RFC3546 section 3.1. If set, the load balancer sends this string as the SNI hostname in the TLS connection to the backend, and requires that this string match a Subject Alternative Name (SAN) in the backend's server certificate. With a Regional Internet NEG backend, if the SNI is specified here, the load balancer uses it regardless of whether the Regional Internet NEG is specified with FQDN or IP address and port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.subjectAltNames">subjectAltNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]</code> | subject_alt_names block. |

---

##### `authenticationConfig`<sup>Optional</sup> <a name="authenticationConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.authenticationConfig"></a>

```typescript
public readonly authenticationConfig: string;
```

- *Type:* string

Reference to the BackendAuthenticationConfig resource from the networksecurity.googleapis.com namespace. Can be used in authenticating TLS connections to the backend, as specified by the authenticationMode field. Can only be specified if authenticationMode is not NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#authentication_config ComputeBackendService#authentication_config}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.sni"></a>

```typescript
public readonly sni: string;
```

- *Type:* string

Server Name Indication - see RFC3546 section 3.1. If set, the load balancer sends this string as the SNI hostname in the TLS connection to the backend, and requires that this string match a Subject Alternative Name (SAN) in the backend's server certificate. With a Regional Internet NEG backend, if the SNI is specified here, the load balancer uses it regardless of whether the Regional Internet NEG is specified with FQDN or IP address and port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#sni ComputeBackendService#sni}

---

##### `subjectAltNames`<sup>Optional</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings.property.subjectAltNames"></a>

```typescript
public readonly subjectAltNames: IResolvable | ComputeBackendServiceTlsSettingsSubjectAltNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]

subject_alt_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}

---

### ComputeBackendServiceTlsSettingsSubjectAltNames <a name="ComputeBackendServiceTlsSettingsSubjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

const computeBackendServiceTlsSettingsSubjectAltNames: computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames.property.dnsName">dnsName</a></code> | <code>string</code> | The SAN specified as a DNS Name. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>string</code> | The SAN specified as a URI. |

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

The SAN specified as a DNS Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dns_name ComputeBackendService#dns_name}

---

##### `uniformResourceIdentifier`<sup>Optional</sup> <a name="uniformResourceIdentifier" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames.property.uniformResourceIdentifier"></a>

```typescript
public readonly uniformResourceIdentifier: string;
```

- *Type:* string

The SAN specified as a URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#uniform_resource_identifier ComputeBackendService#uniform_resource_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceBackendCustomMetricsList <a name="ComputeBackendServiceBackendCustomMetricsList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceBackendCustomMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceBackendCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceBackendCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]

---


### ComputeBackendServiceBackendCustomMetricsOutputReference <a name="ComputeBackendServiceBackendCustomMetricsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.resetMaxUtilization"></a>

```typescript
public resetMaxUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRunInput">dryRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRunInput"></a>

```typescript
public readonly dryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilizationInput"></a>

```typescript
public readonly maxUtilizationInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceBackendCustomMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>

---


### ComputeBackendServiceBackendList <a name="ComputeBackendServiceBackendList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceBackendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>[]

---


### ComputeBackendServiceBackendOutputReference <a name="ComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode">resetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler">resetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">resetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">resetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">resetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">resetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetPreference">resetPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.putCustomMetrics"></a>

```typescript
public putCustomMetrics(value: IResolvable | ComputeBackendServiceBackendCustomMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]

---

##### `resetBalancingMode` <a name="resetBalancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```typescript
public resetBalancingMode(): void
```

##### `resetCapacityScaler` <a name="resetCapacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```typescript
public resetCapacityScaler(): void
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCustomMetrics"></a>

```typescript
public resetCustomMetrics(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxConnectionsPerEndpoint` <a name="resetMaxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```typescript
public resetMaxConnectionsPerEndpoint(): void
```

##### `resetMaxConnectionsPerInstance` <a name="resetMaxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```typescript
public resetMaxConnectionsPerInstance(): void
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```typescript
public resetMaxRate(): void
```

##### `resetMaxRatePerEndpoint` <a name="resetMaxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```typescript
public resetMaxRatePerEndpoint(): void
```

##### `resetMaxRatePerInstance` <a name="resetMaxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```typescript
public resetMaxRatePerInstance(): void
```

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```typescript
public resetMaxUtilization(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList">ComputeBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput">balancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput">capacityScalerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.customMetricsInput">customMetricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">maxConnectionsPerEndpointInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">maxConnectionsPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">maxRatePerEndpointInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">maxRatePerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.customMetrics"></a>

```typescript
public readonly customMetrics: ComputeBackendServiceBackendCustomMetricsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetricsList">ComputeBackendServiceBackendCustomMetricsList</a>

---

##### `balancingModeInput`<sup>Optional</sup> <a name="balancingModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```typescript
public readonly balancingModeInput: string;
```

- *Type:* string

---

##### `capacityScalerInput`<sup>Optional</sup> <a name="capacityScalerInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```typescript
public readonly capacityScalerInput: number;
```

- *Type:* number

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.customMetricsInput"></a>

```typescript
public readonly customMetricsInput: IResolvable | ComputeBackendServiceBackendCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendCustomMetrics">ComputeBackendServiceBackendCustomMetrics</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="maxConnectionsPerEndpointInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```typescript
public readonly maxConnectionsPerEndpointInput: number;
```

- *Type:* number

---

##### `maxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="maxConnectionsPerInstanceInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```typescript
public readonly maxConnectionsPerInstanceInput: number;
```

- *Type:* number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```typescript
public readonly maxRateInput: number;
```

- *Type:* number

---

##### `maxRatePerEndpointInput`<sup>Optional</sup> <a name="maxRatePerEndpointInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```typescript
public readonly maxRatePerEndpointInput: number;
```

- *Type:* number

---

##### `maxRatePerInstanceInput`<sup>Optional</sup> <a name="maxRatePerInstanceInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```typescript
public readonly maxRatePerInstanceInput: number;
```

- *Type:* number

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```typescript
public readonly maxUtilizationInput: number;
```

- *Type:* number

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```typescript
public readonly balancingMode: string;
```

- *Type:* string

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```typescript
public readonly capacityScaler: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```typescript
public readonly maxConnectionsPerEndpoint: number;
```

- *Type:* number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```typescript
public readonly maxConnectionsPerInstance: number;
```

- *Type:* number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```typescript
public readonly maxRatePerEndpoint: number;
```

- *Type:* number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```typescript
public readonly maxRatePerInstance: number;
```

- *Type:* number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceBackend;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>

---


### ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">resetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">resetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">resetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">resetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHost` <a name="resetIncludeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```typescript
public resetIncludeHost(): void
```

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```typescript
public resetIncludeHttpHeaders(): void
```

##### `resetIncludeNamedCookies` <a name="resetIncludeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```typescript
public resetIncludeNamedCookies(): void
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```typescript
public resetIncludeProtocol(): void
```

##### `resetIncludeQueryString` <a name="resetIncludeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```typescript
public resetIncludeQueryString(): void
```

##### `resetQueryStringBlacklist` <a name="resetQueryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```typescript
public resetQueryStringBlacklist(): void
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```typescript
public resetQueryStringWhitelist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">includeHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">includeNamedCookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">includeQueryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">queryStringBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeHostInput`<sup>Optional</sup> <a name="includeHostInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```typescript
public readonly includeHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```typescript
public readonly includeHttpHeadersInput: string[];
```

- *Type:* string[]

---

##### `includeNamedCookiesInput`<sup>Optional</sup> <a name="includeNamedCookiesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```typescript
public readonly includeNamedCookiesInput: string[];
```

- *Type:* string[]

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```typescript
public readonly includeProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeQueryStringInput`<sup>Optional</sup> <a name="includeQueryStringInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```typescript
public readonly includeQueryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringBlacklistInput`<sup>Optional</sup> <a name="queryStringBlacklistInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```typescript
public readonly queryStringBlacklistInput: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```typescript
public readonly queryStringWhitelistInput: string[];
```

- *Type:* string[]

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```typescript
public readonly includeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```typescript
public readonly includeNamedCookies: string[];
```

- *Type:* string[]

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```typescript
public readonly includeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```typescript
public readonly queryStringBlacklist: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCdnPolicyNegativeCachingPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### ComputeBackendServiceCdnPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCdnPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetRequestCoalescing">resetRequestCoalescing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```typescript
public putBypassCacheOnRequestHeaders(value: IResolvable | ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```typescript
public putCacheKeyPolicy(value: ComputeBackendServiceCdnPolicyCacheKeyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```typescript
public putNegativeCachingPolicy(value: IResolvable | ComputeBackendServiceCdnPolicyNegativeCachingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```typescript
public resetBypassCacheOnRequestHeaders(): void
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```typescript
public resetCacheKeyPolicy(): void
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```typescript
public resetCacheMode(): void
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```typescript
public resetClientTtl(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```typescript
public resetNegativeCaching(): void
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```typescript
public resetNegativeCachingPolicy(): void
```

##### `resetRequestCoalescing` <a name="resetRequestCoalescing" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetRequestCoalescing"></a>

```typescript
public resetRequestCoalescing(): void
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```typescript
public resetServeWhileStale(): void
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```typescript
public resetSignedUrlCacheMaxAgeSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescingInput">requestCoalescingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: ComputeBackendServiceCdnPolicyNegativeCachingPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```typescript
public readonly bypassCacheOnRequestHeadersInput: IResolvable | ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```typescript
public readonly cacheKeyPolicyInput: ComputeBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```typescript
public readonly cacheModeInput: string;
```

- *Type:* string

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```typescript
public readonly clientTtlInput: number;
```

- *Type:* number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```typescript
public readonly negativeCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```typescript
public readonly negativeCachingPolicyInput: IResolvable | ComputeBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---

##### `requestCoalescingInput`<sup>Optional</sup> <a name="requestCoalescingInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```typescript
public readonly requestCoalescingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```typescript
public readonly serveWhileStaleInput: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```typescript
public readonly signedUrlCacheMaxAgeSecInput: number;
```

- *Type:* number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestCoalescing`<sup>Required</sup> <a name="requestCoalescing" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---


### ComputeBackendServiceCircuitBreakersOutputReference <a name="ComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">resetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">resetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```typescript
public resetMaxPendingRequests(): void
```

##### `resetMaxRequests` <a name="resetMaxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```typescript
public resetMaxRequests(): void
```

##### `resetMaxRequestsPerConnection` <a name="resetMaxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```typescript
public resetMaxRequestsPerConnection(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">maxRequestsPerConnectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```typescript
public readonly maxPendingRequestsInput: number;
```

- *Type:* number

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```typescript
public readonly maxRequestsInput: number;
```

- *Type:* number

---

##### `maxRequestsPerConnectionInput`<sup>Optional</sup> <a name="maxRequestsPerConnectionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```typescript
public readonly maxRequestsPerConnectionInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```typescript
public readonly maxRequestsPerConnection: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---


### ComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```typescript
public putTtl(value: ComputeBackendServiceConsistentHashHttpCookieTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```typescript
public readonly ttl: ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: ComputeBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---


### ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### ComputeBackendServiceConsistentHashOutputReference <a name="ComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceConsistentHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie">putHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">resetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpCookie` <a name="putHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```typescript
public putHttpCookie(value: ComputeBackendServiceConsistentHashHttpCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `resetHttpCookie` <a name="resetHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```typescript
public resetHttpCookie(): void
```

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```typescript
public resetHttpHeaderName(): void
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```typescript
public resetMinimumRingSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">httpCookieInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```typescript
public readonly httpCookie: ComputeBackendServiceConsistentHashHttpCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `httpCookieInput`<sup>Optional</sup> <a name="httpCookieInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```typescript
public readonly httpCookieInput: ComputeBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```typescript
public readonly httpHeaderNameInput: string;
```

- *Type:* string

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```typescript
public readonly minimumRingSizeInput: number;
```

- *Type:* number

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---


### ComputeBackendServiceCustomMetricsList <a name="ComputeBackendServiceCustomMetricsList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCustomMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>[]

---


### ComputeBackendServiceCustomMetricsOutputReference <a name="ComputeBackendServiceCustomMetricsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceCustomMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.dryRunInput">dryRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.dryRunInput"></a>

```typescript
public readonly dryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceCustomMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCustomMetrics">ComputeBackendServiceCustomMetrics</a>

---


### ComputeBackendServiceIapOutputReference <a name="ComputeBackendServiceIapOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceIapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientId">resetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientSecret">resetOauth2ClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauth2ClientId` <a name="resetOauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```typescript
public resetOauth2ClientId(): void
```

##### `resetOauth2ClientSecret` <a name="resetOauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```typescript
public resetOauth2ClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```typescript
public readonly oauth2ClientSecretSha256: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```typescript
public readonly oauth2ClientIdInput: string;
```

- *Type:* string

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```typescript
public readonly oauth2ClientSecretInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---


### ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceLocalityLbPoliciesCustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### ComputeBackendServiceLocalityLbPoliciesList <a name="ComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceLocalityLbPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceLocalityLbPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceLocalityLbPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>[]

---


### ComputeBackendServiceLocalityLbPoliciesOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```typescript
public putCustomPolicy(value: ComputeBackendServiceLocalityLbPoliciesCustomPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```typescript
public putPolicy(value: ComputeBackendServiceLocalityLbPoliciesPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```typescript
public resetCustomPolicy(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">policyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```typescript
public readonly customPolicy: ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```typescript
public readonly policy: ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```typescript
public readonly customPolicyInput: ComputeBackendServiceLocalityLbPoliciesCustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: ComputeBackendServiceLocalityLbPoliciesPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceLocalityLbPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>

---


### ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceLocalityLbPoliciesPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### ComputeBackendServiceLogConfigOutputReference <a name="ComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetOptionalFields">resetOptionalFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetOptionalMode">resetOptionalMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetOptionalFields` <a name="resetOptionalFields" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetOptionalFields"></a>

```typescript
public resetOptionalFields(): void
```

##### `resetOptionalMode` <a name="resetOptionalMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetOptionalMode"></a>

```typescript
public resetOptionalMode(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalFieldsInput">optionalFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalModeInput">optionalModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalMode">optionalMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optionalFieldsInput`<sup>Optional</sup> <a name="optionalFieldsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalFieldsInput"></a>

```typescript
public readonly optionalFieldsInput: string[];
```

- *Type:* string[]

---

##### `optionalModeInput`<sup>Optional</sup> <a name="optionalModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalModeInput"></a>

```typescript
public readonly optionalModeInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

---

##### `optionalMode`<sup>Required</sup> <a name="optionalMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```typescript
public readonly optionalMode: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---


### ComputeBackendServiceMaxStreamDurationOutputReference <a name="ComputeBackendServiceMaxStreamDurationOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceMaxStreamDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceMaxStreamDuration">ComputeBackendServiceMaxStreamDuration</a>

---


### ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### ComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="ComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---


### ComputeBackendServiceOutlierDetectionOutputReference <a name="ComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">putBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">resetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">resetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">resetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">resetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">resetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">resetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">resetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">resetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseEjectionTime` <a name="putBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```typescript
public putBaseEjectionTime(value: ComputeBackendServiceOutlierDetectionBaseEjectionTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `putInterval` <a name="putInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```typescript
public putInterval(value: ComputeBackendServiceOutlierDetectionInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```typescript
public resetBaseEjectionTime(): void
```

##### `resetConsecutiveErrors` <a name="resetConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```typescript
public resetConsecutiveErrors(): void
```

##### `resetConsecutiveGatewayFailure` <a name="resetConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```typescript
public resetConsecutiveGatewayFailure(): void
```

##### `resetEnforcingConsecutiveErrors` <a name="resetEnforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```typescript
public resetEnforcingConsecutiveErrors(): void
```

##### `resetEnforcingConsecutiveGatewayFailure` <a name="resetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```typescript
public resetEnforcingConsecutiveGatewayFailure(): void
```

##### `resetEnforcingSuccessRate` <a name="resetEnforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```typescript
public resetEnforcingSuccessRate(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```typescript
public resetMaxEjectionPercent(): void
```

##### `resetSuccessRateMinimumHosts` <a name="resetSuccessRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```typescript
public resetSuccessRateMinimumHosts(): void
```

##### `resetSuccessRateRequestVolume` <a name="resetSuccessRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```typescript
public resetSuccessRateRequestVolume(): void
```

##### `resetSuccessRateStdevFactor` <a name="resetSuccessRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```typescript
public resetSuccessRateStdevFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutiveErrorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutiveGatewayFailureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcingConsecutiveErrorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcingConsecutiveGatewayFailureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcingSuccessRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">successRateMinimumHostsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">successRateRequestVolumeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">successRateStdevFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```typescript
public readonly interval: ComputeBackendServiceOutlierDetectionIntervalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```typescript
public readonly baseEjectionTimeInput: ComputeBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutiveErrorsInput`<sup>Optional</sup> <a name="consecutiveErrorsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```typescript
public readonly consecutiveErrorsInput: number;
```

- *Type:* number

---

##### `consecutiveGatewayFailureInput`<sup>Optional</sup> <a name="consecutiveGatewayFailureInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```typescript
public readonly consecutiveGatewayFailureInput: number;
```

- *Type:* number

---

##### `enforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="enforcingConsecutiveErrorsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```typescript
public readonly enforcingConsecutiveErrorsInput: number;
```

- *Type:* number

---

##### `enforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailureInput: number;
```

- *Type:* number

---

##### `enforcingSuccessRateInput`<sup>Optional</sup> <a name="enforcingSuccessRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```typescript
public readonly enforcingSuccessRateInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: ComputeBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```typescript
public readonly maxEjectionPercentInput: number;
```

- *Type:* number

---

##### `successRateMinimumHostsInput`<sup>Optional</sup> <a name="successRateMinimumHostsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```typescript
public readonly successRateMinimumHostsInput: number;
```

- *Type:* number

---

##### `successRateRequestVolumeInput`<sup>Optional</sup> <a name="successRateRequestVolumeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```typescript
public readonly successRateRequestVolumeInput: number;
```

- *Type:* number

---

##### `successRateStdevFactorInput`<sup>Optional</sup> <a name="successRateStdevFactorInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```typescript
public readonly successRateStdevFactorInput: number;
```

- *Type:* number

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```typescript
public readonly consecutiveErrors: number;
```

- *Type:* number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```typescript
public readonly consecutiveGatewayFailure: number;
```

- *Type:* number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```typescript
public readonly enforcingConsecutiveErrors: number;
```

- *Type:* number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailure: number;
```

- *Type:* number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```typescript
public readonly enforcingSuccessRate: number;
```

- *Type:* number

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```typescript
public readonly successRateMinimumHosts: number;
```

- *Type:* number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```typescript
public readonly successRateRequestVolume: number;
```

- *Type:* number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```typescript
public readonly successRateStdevFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---


### ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion">resetAccessKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion">resetOriginRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetAccessKeyVersion` <a name="resetAccessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion"></a>

```typescript
public resetAccessKeyVersion(): void
```

##### `resetOriginRegion` <a name="resetOriginRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion"></a>

```typescript
public resetOriginRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput">accessKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput">originRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">accessKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">originRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyVersionInput`<sup>Optional</sup> <a name="accessKeyVersionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput"></a>

```typescript
public readonly accessKeyVersionInput: string;
```

- *Type:* string

---

##### `originRegionInput`<sup>Optional</sup> <a name="originRegionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```typescript
public readonly originRegionInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accessKeyVersion`<sup>Required</sup> <a name="accessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```typescript
public readonly accessKeyVersion: string;
```

- *Type:* string

---

##### `originRegion`<sup>Required</sup> <a name="originRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```typescript
public readonly originRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceSecuritySettingsAwsV4Authentication;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### ComputeBackendServiceSecuritySettingsOutputReference <a name="ComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication">putAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication">resetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy">resetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames">resetSubjectAltNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsV4Authentication` <a name="putAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication"></a>

```typescript
public putAwsV4Authentication(value: ComputeBackendServiceSecuritySettingsAwsV4Authentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `resetAwsV4Authentication` <a name="resetAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication"></a>

```typescript
public resetAwsV4Authentication(): void
```

##### `resetClientTlsPolicy` <a name="resetClientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy"></a>

```typescript
public resetClientTlsPolicy(): void
```

##### `resetSubjectAltNames` <a name="resetSubjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames"></a>

```typescript
public resetSubjectAltNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput">awsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">clientTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">subjectAltNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">subjectAltNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsV4Authentication`<sup>Required</sup> <a name="awsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```typescript
public readonly awsV4Authentication: ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a>

---

##### `awsV4AuthenticationInput`<sup>Optional</sup> <a name="awsV4AuthenticationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput"></a>

```typescript
public readonly awsV4AuthenticationInput: ComputeBackendServiceSecuritySettingsAwsV4Authentication;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `clientTlsPolicyInput`<sup>Optional</sup> <a name="clientTlsPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```typescript
public readonly clientTlsPolicyInput: string;
```

- *Type:* string

---

##### `subjectAltNamesInput`<sup>Optional</sup> <a name="subjectAltNamesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```typescript
public readonly subjectAltNamesInput: string[];
```

- *Type:* string[]

---

##### `clientTlsPolicy`<sup>Required</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```typescript
public readonly clientTlsPolicy: string;
```

- *Type:* string

---

##### `subjectAltNames`<sup>Required</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```typescript
public readonly subjectAltNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceSecuritySettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---


### ComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="ComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```typescript
public putTtl(value: ComputeBackendServiceStrongSessionAffinityCookieTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```typescript
public readonly ttl: ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: ComputeBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---


### ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### ComputeBackendServiceTimeoutsOutputReference <a name="ComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---


### ComputeBackendServiceTlsSettingsOutputReference <a name="ComputeBackendServiceTlsSettingsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceTlsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.putSubjectAltNames">putSubjectAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetAuthenticationConfig">resetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetSni">resetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetSubjectAltNames">resetSubjectAltNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubjectAltNames` <a name="putSubjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.putSubjectAltNames"></a>

```typescript
public putSubjectAltNames(value: IResolvable | ComputeBackendServiceTlsSettingsSubjectAltNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.putSubjectAltNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]

---

##### `resetAuthenticationConfig` <a name="resetAuthenticationConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetAuthenticationConfig"></a>

```typescript
public resetAuthenticationConfig(): void
```

##### `resetSni` <a name="resetSni" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetSni"></a>

```typescript
public resetSni(): void
```

##### `resetSubjectAltNames` <a name="resetSubjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.resetSubjectAltNames"></a>

```typescript
public resetSubjectAltNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNames">subjectAltNames</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList">ComputeBackendServiceTlsSettingsSubjectAltNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfigInput">authenticationConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.sniInput">sniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNamesInput">subjectAltNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfig">authenticationConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.sni">sni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subjectAltNames`<sup>Required</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNames"></a>

```typescript
public readonly subjectAltNames: ComputeBackendServiceTlsSettingsSubjectAltNamesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList">ComputeBackendServiceTlsSettingsSubjectAltNamesList</a>

---

##### `authenticationConfigInput`<sup>Optional</sup> <a name="authenticationConfigInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfigInput"></a>

```typescript
public readonly authenticationConfigInput: string;
```

- *Type:* string

---

##### `sniInput`<sup>Optional</sup> <a name="sniInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.sniInput"></a>

```typescript
public readonly sniInput: string;
```

- *Type:* string

---

##### `subjectAltNamesInput`<sup>Optional</sup> <a name="subjectAltNamesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNamesInput"></a>

```typescript
public readonly subjectAltNamesInput: IResolvable | ComputeBackendServiceTlsSettingsSubjectAltNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfig"></a>

```typescript
public readonly authenticationConfig: string;
```

- *Type:* string

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.sni"></a>

```typescript
public readonly sni: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceTlsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettings">ComputeBackendServiceTlsSettings</a>

---


### ComputeBackendServiceTlsSettingsSubjectAltNamesList <a name="ComputeBackendServiceTlsSettingsSubjectAltNamesList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.get"></a>

```typescript
public get(index: number): ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceTlsSettingsSubjectAltNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>[]

---


### ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference <a name="ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer"></a>

```typescript
import { computeBackendService } from '@cdktf/provider-google'

new computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resetUniformResourceIdentifier">resetUniformResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsName` <a name="resetDnsName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetUniformResourceIdentifier` <a name="resetUniformResourceIdentifier" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resetUniformResourceIdentifier"></a>

```typescript
public resetUniformResourceIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifierInput">uniformResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `uniformResourceIdentifierInput`<sup>Optional</sup> <a name="uniformResourceIdentifierInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifierInput"></a>

```typescript
public readonly uniformResourceIdentifierInput: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `uniformResourceIdentifier`<sup>Required</sup> <a name="uniformResourceIdentifier" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier"></a>

```typescript
public readonly uniformResourceIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendServiceTlsSettingsSubjectAltNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTlsSettingsSubjectAltNames">ComputeBackendServiceTlsSettingsSubjectAltNames</a>

---



