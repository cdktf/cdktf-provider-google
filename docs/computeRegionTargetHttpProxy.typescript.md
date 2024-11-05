# `computeRegionTargetHttpProxy` Submodule <a name="`computeRegionTargetHttpProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpProxy <a name="ComputeRegionTargetHttpProxy" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy google_compute_region_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

new computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy(scope: Construct, id: string, config: ComputeRegionTargetHttpProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig">ComputeRegionTargetHttpProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig">ComputeRegionTargetHttpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionTargetHttpProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetHttpKeepAliveTimeoutSec"></a>

```typescript
public resetHttpKeepAliveTimeoutSec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionTargetHttpProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionTargetHttpProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionTargetHttpProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionTargetHttpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetHttpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput">urlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap">urlMap</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionTargetHttpProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSecInput"></a>

```typescript
public readonly httpKeepAliveTimeoutSecInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionTargetHttpProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput"></a>

```typescript
public readonly urlMapInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpProxyConfig <a name="ComputeRegionTargetHttpProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.Initializer"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

const computeRegionTargetHttpProxyConfig: computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap">urlMap</a></code> | <code>string</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#name ComputeRegionTargetHttpProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#url_map ComputeRegionTargetHttpProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#description ComputeRegionTargetHttpProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regional
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#region ComputeRegionTargetHttpProxy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionTargetHttpProxyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#timeouts ComputeRegionTargetHttpProxy#timeouts}

---

### ComputeRegionTargetHttpProxyTimeouts <a name="ComputeRegionTargetHttpProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.Initializer"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

const computeRegionTargetHttpProxyTimeouts: computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionTargetHttpProxy } from '@cdktf/provider-google'

new computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionTargetHttpProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

---



