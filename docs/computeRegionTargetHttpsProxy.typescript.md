# `computeRegionTargetHttpsProxy` Submodule <a name="`computeRegionTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpsProxy <a name="ComputeRegionTargetHttpsProxy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

new computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy(scope: Construct, id: string, config: ComputeRegionTargetHttpsProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig">ComputeRegionTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig">ComputeRegionTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates">resetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionTargetHttpsProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---

##### `resetCertificateManagerCertificates` <a name="resetCertificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```typescript
public resetCertificateManagerCertificates(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```typescript
public resetHttpKeepAliveTimeoutSec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy"></a>

```typescript
public resetServerTlsPolicy(): void
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates"></a>

```typescript
public resetSslCertificates(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput">certificateManagerCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput">urlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap">urlMap</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionTargetHttpsProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `certificateManagerCertificatesInput`<sup>Optional</sup> <a name="certificateManagerCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```typescript
public readonly certificateManagerCertificatesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```typescript
public readonly httpKeepAliveTimeoutSecInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```typescript
public readonly serverTlsPolicyInput: string;
```

- *Type:* string

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput"></a>

```typescript
public readonly sslCertificatesInput: string[];
```

- *Type:* string[]

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionTargetHttpsProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput"></a>

```typescript
public readonly urlMapInput: string;
```

- *Type:* string

---

##### `certificateManagerCertificates`<sup>Required</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates"></a>

```typescript
public readonly certificateManagerCertificates: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpsProxyConfig <a name="ComputeRegionTargetHttpsProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

const computeRegionTargetHttpsProxyConfig: computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap">urlMap</a></code> | <code>string</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>string[]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```typescript
public readonly certificateManagerCertificates: string[];
```

- *Type:* string[]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

sslCertificates and certificateManagerCertificates can't be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#certificate_manager_certificates ComputeRegionTargetHttpsProxy#certificate_manager_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regioanl
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#server_tls_policy ComputeRegionTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#ssl_policy ComputeRegionTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionTargetHttpsProxyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

### ComputeRegionTargetHttpsProxyTimeouts <a name="ComputeRegionTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.Initializer"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

const computeRegionTargetHttpsProxyTimeouts: computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpsProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionTargetHttpsProxy } from '@cdktf/provider-google'

new computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionTargetHttpsProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---



