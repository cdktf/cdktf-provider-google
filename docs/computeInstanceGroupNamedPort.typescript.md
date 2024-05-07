# `computeInstanceGroupNamedPort` Submodule <a name="`computeInstanceGroupNamedPort` Submodule" id="@cdktf/provider-google.computeInstanceGroupNamedPort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceGroupNamedPortA <a name="ComputeInstanceGroupNamedPortA" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port google_compute_instance_group_named_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

new computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA(scope: Construct, id: string, config: ComputeInstanceGroupNamedPortAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig">ComputeInstanceGroupNamedPortAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig">ComputeInstanceGroupNamedPortAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInstanceGroupNamedPortTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isConstruct"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformElement"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformResource"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstanceGroupNamedPortA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstanceGroupNamedPortA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceGroupNamedPortA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference">ComputeInstanceGroupNamedPortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceGroupNamedPortTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference">ComputeInstanceGroupNamedPortTimeoutsOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceGroupNamedPortAConfig <a name="ComputeInstanceGroupNamedPortAConfig" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.Initializer"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

const computeInstanceGroupNamedPortAConfig: computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.group">group</a></code> | <code>string</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.name">name</a></code> | <code>string</code> | The name for this named port. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.port">port</a></code> | <code>number</code> | The port number, which can be a value between 1 and 65535. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#id ComputeInstanceGroupNamedPortA#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#project ComputeInstanceGroupNamedPortA#project}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.zone">zone</a></code> | <code>string</code> | The zone of the instance group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#group ComputeInstanceGroupNamedPortA#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#name ComputeInstanceGroupNamedPortA#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number, which can be a value between 1 and 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#port ComputeInstanceGroupNamedPortA#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#id ComputeInstanceGroupNamedPortA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#project ComputeInstanceGroupNamedPortA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#timeouts ComputeInstanceGroupNamedPortA#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortAConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#zone ComputeInstanceGroupNamedPortA#zone}

---

### ComputeInstanceGroupNamedPortTimeouts <a name="ComputeInstanceGroupNamedPortTimeouts" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts.Initializer"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

const computeInstanceGroupNamedPortTimeouts: computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#create ComputeInstanceGroupNamedPortA#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#delete ComputeInstanceGroupNamedPortA#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#create ComputeInstanceGroupNamedPortA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_instance_group_named_port#delete ComputeInstanceGroupNamedPortA#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceGroupNamedPortTimeoutsOutputReference <a name="ComputeInstanceGroupNamedPortTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInstanceGroupNamedPort } from '@cdktf/provider-google'

new computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceGroupNamedPort.ComputeInstanceGroupNamedPortTimeouts">ComputeInstanceGroupNamedPortTimeouts</a>

---



