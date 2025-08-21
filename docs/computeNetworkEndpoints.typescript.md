# `computeNetworkEndpoints` Submodule <a name="`computeNetworkEndpoints` Submodule" id="@cdktf/provider-google.computeNetworkEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpoints <a name="ComputeNetworkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints google_compute_network_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

new computeNetworkEndpoints.ComputeNetworkEndpoints(scope: Construct, id: string, config: ComputeNetworkEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig">ComputeNetworkEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig">ComputeNetworkEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putNetworkEndpoints">putNetworkEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetNetworkEndpoints">resetNetworkEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkEndpoints` <a name="putNetworkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putNetworkEndpoints"></a>

```typescript
public putNetworkEndpoints(value: IResolvable | ComputeNetworkEndpointsNetworkEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putNetworkEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkEndpointsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkEndpoints` <a name="resetNetworkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetNetworkEndpoints"></a>

```typescript
public resetNetworkEndpoints(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isConstruct"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

computeNetworkEndpoints.ComputeNetworkEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformElement"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformResource"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeNetworkEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpoints">networkEndpoints</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList">ComputeNetworkEndpointsNetworkEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference">ComputeNetworkEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointGroupInput">networkEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointsInput">networkEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointGroup">networkEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkEndpoints`<sup>Required</sup> <a name="networkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpoints"></a>

```typescript
public readonly networkEndpoints: ComputeNetworkEndpointsNetworkEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList">ComputeNetworkEndpointsNetworkEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEndpointsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference">ComputeNetworkEndpointsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkEndpointGroupInput`<sup>Optional</sup> <a name="networkEndpointGroupInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointGroupInput"></a>

```typescript
public readonly networkEndpointGroupInput: string;
```

- *Type:* string

---

##### `networkEndpointsInput`<sup>Optional</sup> <a name="networkEndpointsInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointsInput"></a>

```typescript
public readonly networkEndpointsInput: IResolvable | ComputeNetworkEndpointsNetworkEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkEndpointsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkEndpointGroup`<sup>Required</sup> <a name="networkEndpointGroup" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.networkEndpointGroup"></a>

```typescript
public readonly networkEndpointGroup: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointsConfig <a name="ComputeNetworkEndpointsConfig" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

const computeNetworkEndpointsConfig: computeNetworkEndpoints.ComputeNetworkEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.networkEndpointGroup">networkEndpointGroup</a></code> | <code>string</code> | The network endpoint group these endpoints are part of. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#id ComputeNetworkEndpoints#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.networkEndpoints">networkEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]</code> | network_endpoints block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#project ComputeNetworkEndpoints#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the containing network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkEndpointGroup`<sup>Required</sup> <a name="networkEndpointGroup" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.networkEndpointGroup"></a>

```typescript
public readonly networkEndpointGroup: string;
```

- *Type:* string

The network endpoint group these endpoints are part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#network_endpoint_group ComputeNetworkEndpoints#network_endpoint_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#id ComputeNetworkEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkEndpoints`<sup>Optional</sup> <a name="networkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.networkEndpoints"></a>

```typescript
public readonly networkEndpoints: IResolvable | ComputeNetworkEndpointsNetworkEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]

network_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#network_endpoints ComputeNetworkEndpoints#network_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#project ComputeNetworkEndpoints#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEndpointsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#timeouts ComputeNetworkEndpoints#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#zone ComputeNetworkEndpoints#zone}

---

### ComputeNetworkEndpointsNetworkEndpoints <a name="ComputeNetworkEndpointsNetworkEndpoints" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

const computeNetworkEndpointsNetworkEndpoints: computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.ipAddress">ipAddress</a></code> | <code>string</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.instance">instance</a></code> | <code>string</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.port">port</a></code> | <code>number</code> | Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#ip_address ComputeNetworkEndpoints#ip_address}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone as the network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#instance ComputeNetworkEndpoints#instance}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number of network endpoint. **Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#port ComputeNetworkEndpoints#port}

---

### ComputeNetworkEndpointsTimeouts <a name="ComputeNetworkEndpointsTimeouts" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

const computeNetworkEndpointsTimeouts: computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#create ComputeNetworkEndpoints#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#delete ComputeNetworkEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#update ComputeNetworkEndpoints#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#create ComputeNetworkEndpoints#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#delete ComputeNetworkEndpoints#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_network_endpoints#update ComputeNetworkEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointsNetworkEndpointsList <a name="ComputeNetworkEndpointsNetworkEndpointsList" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

new computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.get"></a>

```typescript
public get(index: number): ComputeNetworkEndpointsNetworkEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkEndpointsNetworkEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>[]

---


### ComputeNetworkEndpointsNetworkEndpointsOutputReference <a name="ComputeNetworkEndpointsNetworkEndpointsOutputReference" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

new computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkEndpointsNetworkEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsNetworkEndpoints">ComputeNetworkEndpointsNetworkEndpoints</a>

---


### ComputeNetworkEndpointsTimeoutsOutputReference <a name="ComputeNetworkEndpointsTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetworkEndpoints } from '@cdktf/provider-google'

new computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkEndpointsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpoints.ComputeNetworkEndpointsTimeouts">ComputeNetworkEndpointsTimeouts</a>

---



