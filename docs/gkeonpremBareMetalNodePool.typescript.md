# `gkeonpremBareMetalNodePool` Submodule <a name="`gkeonpremBareMetalNodePool` Submodule" id="@cdktf/provider-google.gkeonpremBareMetalNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremBareMetalNodePool <a name="GkeonpremBareMetalNodePool" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool(scope: Construct, id: string, config: GkeonpremBareMetalNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig">GkeonpremBareMetalNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig">GkeonpremBareMetalNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig"></a>

```typescript
public putNodePoolConfig(value: GkeonpremBareMetalNodePoolNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeonpremBareMetalNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremBareMetalNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremBareMetalNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremBareMetalNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput">bareMetalClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster">bareMetalCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GkeonpremBareMetalNodePoolNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status"></a>

```typescript
public readonly status: GkeonpremBareMetalNodePoolStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremBareMetalNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalClusterInput`<sup>Optional</sup> <a name="bareMetalClusterInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput"></a>

```typescript
public readonly bareMetalClusterInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput"></a>

```typescript
public readonly nodePoolConfigInput: GkeonpremBareMetalNodePoolNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeonpremBareMetalNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster"></a>

```typescript
public readonly bareMetalCluster: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremBareMetalNodePoolConfig <a name="GkeonpremBareMetalNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolConfig: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster">bareMetalCluster</a></code> | <code>string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name">name</a></code> | <code>string</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster"></a>

```typescript
public readonly bareMetalCluster: string;
```

- *Type:* string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GkeonpremBareMetalNodePoolNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremBareMetalNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}

---

### GkeonpremBareMetalNodePoolNodePoolConfig <a name="GkeonpremBareMetalNodePoolNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolNodePoolConfig: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs">nodeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#node_configs GkeonpremBareMetalNodePool#node_configs}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#operating_system GkeonpremBareMetalNodePool#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#taints GkeonpremBareMetalNodePool#taints}

---

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp">nodeIp</a></code> | <code>string</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `nodeIp`<sup>Optional</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#node_ip GkeonpremBareMetalNodePool#node_ip}

---

### GkeonpremBareMetalNodePoolNodePoolConfigTaints <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolNodePoolConfigTaints: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#effect GkeonpremBareMetalNodePool#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#key GkeonpremBareMetalNodePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#value GkeonpremBareMetalNodePool#value}

---

### GkeonpremBareMetalNodePoolStatus <a name="GkeonpremBareMetalNodePoolStatus" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolStatus: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus = { ... }
```


### GkeonpremBareMetalNodePoolStatusConditions <a name="GkeonpremBareMetalNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolStatusConditions: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions = { ... }
```


### GkeonpremBareMetalNodePoolTimeouts <a name="GkeonpremBareMetalNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

const gkeonpremBareMetalNodePoolTimeouts: gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]

---


### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp">resetNodeIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNodeIp` <a name="resetNodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```typescript
public resetNodeIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">nodeIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp">nodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIpInput`<sup>Optional</sup> <a name="nodeIpInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```typescript
public readonly nodeIpInput: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIp`<sup>Required</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>

---


### GkeonpremBareMetalNodePoolNodePoolConfigOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs">putNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfigs` <a name="putNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs"></a>

```typescript
public putNodeConfigs(value: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs">nodeConfigs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput">nodeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints"></a>

```typescript
public readonly taints: GkeonpremBareMetalNodePoolNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeConfigsInput`<sup>Optional</sup> <a name="nodeConfigsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```typescript
public readonly nodeConfigsInput: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>[]

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalNodePoolNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>[]

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalNodePoolNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>

---


### GkeonpremBareMetalNodePoolStatusConditionsList <a name="GkeonpremBareMetalNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalNodePoolStatusConditionsOutputReference <a name="GkeonpremBareMetalNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalNodePoolStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a>

---


### GkeonpremBareMetalNodePoolStatusList <a name="GkeonpremBareMetalNodePoolStatusList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalNodePoolStatusOutputReference <a name="GkeonpremBareMetalNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremBareMetalNodePoolStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalNodePoolStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a>

---


### GkeonpremBareMetalNodePoolTimeoutsOutputReference <a name="GkeonpremBareMetalNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalNodePool } from '@cdktf/provider-google'

new gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

---



