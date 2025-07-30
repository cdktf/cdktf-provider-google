# `computeResizeRequest` Submodule <a name="`computeResizeRequest` Submodule" id="@cdktf/provider-google.computeResizeRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeResizeRequest <a name="ComputeResizeRequest" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request google_compute_resize_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequest(scope: Construct, id: string, config: ComputeResizeRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig">ComputeResizeRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig">ComputeResizeRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration">putRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetRequestedRunDuration">resetRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequestedRunDuration` <a name="putRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration"></a>

```typescript
public putRequestedRunDuration(value: ComputeResizeRequestRequestedRunDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeResizeRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequestedRunDuration` <a name="resetRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetRequestedRunDuration"></a>

```typescript
public resetRequestedRunDuration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeResizeRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

computeResizeRequest.ComputeResizeRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

computeResizeRequest.ComputeResizeRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

computeResizeRequest.ComputeResizeRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

computeResizeRequest.ComputeResizeRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeResizeRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeResizeRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeResizeRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeResizeRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference">ComputeResizeRequestRequestedRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList">ComputeResizeRequestStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference">ComputeResizeRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDurationInput">requestedRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeByInput">resizeByInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeBy">resizeBy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `requestedRunDuration`<sup>Required</sup> <a name="requestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDuration"></a>

```typescript
public readonly requestedRunDuration: ComputeResizeRequestRequestedRunDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference">ComputeResizeRequestRequestedRunDurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.status"></a>

```typescript
public readonly status: ComputeResizeRequestStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList">ComputeResizeRequestStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeResizeRequestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference">ComputeResizeRequestTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManagerInput"></a>

```typescript
public readonly instanceGroupManagerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requestedRunDurationInput`<sup>Optional</sup> <a name="requestedRunDurationInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDurationInput"></a>

```typescript
public readonly requestedRunDurationInput: ComputeResizeRequestRequestedRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---

##### `resizeByInput`<sup>Optional</sup> <a name="resizeByInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeByInput"></a>

```typescript
public readonly resizeByInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeResizeRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeBy"></a>

```typescript
public readonly resizeBy: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeResizeRequestConfig <a name="ComputeResizeRequestConfig" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestConfig: computeResizeRequest.ComputeResizeRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | The reference of the instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.name">name</a></code> | <code>string</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.resizeBy">resizeBy</a></code> | <code>number</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resize-request. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#id ComputeResizeRequest#id}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#project ComputeResizeRequest#project}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.zone">zone</a></code> | <code>string</code> | The reference of the compute zone scoping this request. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

The reference of the instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#instance_group_manager ComputeResizeRequest#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#name ComputeResizeRequest#name}

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.resizeBy"></a>

```typescript
public readonly resizeBy: number;
```

- *Type:* number

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#resize_by ComputeResizeRequest#resize_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#description ComputeResizeRequest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#id ComputeResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#project ComputeResizeRequest#project}.

---

##### `requestedRunDuration`<sup>Optional</sup> <a name="requestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.requestedRunDuration"></a>

```typescript
public readonly requestedRunDuration: ComputeResizeRequestRequestedRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#requested_run_duration ComputeResizeRequest#requested_run_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeResizeRequestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#timeouts ComputeResizeRequest#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The reference of the compute zone scoping this request. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#zone ComputeResizeRequest#zone}

---

### ComputeResizeRequestRequestedRunDuration <a name="ComputeResizeRequestRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestRequestedRunDuration: computeResizeRequest.ComputeResizeRequestRequestedRunDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.seconds">seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

Span of time at a resolution of a second.

Must be from 600 to 604800 inclusive. Note: minimum and maximum allowed range for requestedRunDuration is 10 minutes (600 seconds) and 7 days(604800 seconds) correspondingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#seconds ComputeResizeRequest#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#nanos ComputeResizeRequest#nanos}

---

### ComputeResizeRequestStatus <a name="ComputeResizeRequestStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatus: computeResizeRequest.ComputeResizeRequestStatus = { ... }
```


### ComputeResizeRequestStatusError <a name="ComputeResizeRequestStatusError" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusError: computeResizeRequest.ComputeResizeRequestStatusError = { ... }
```


### ComputeResizeRequestStatusErrorErrors <a name="ComputeResizeRequestStatusErrorErrors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrors: computeResizeRequest.ComputeResizeRequestStatusErrorErrors = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetails <a name="ComputeResizeRequestStatusErrorErrorsErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetails: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetailsHelp: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage = { ... }
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo: computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo = { ... }
```


### ComputeResizeRequestStatusLastAttempt <a name="ComputeResizeRequestStatusLastAttempt" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttempt: computeResizeRequest.ComputeResizeRequestStatusLastAttempt = { ... }
```


### ComputeResizeRequestStatusLastAttemptError <a name="ComputeResizeRequestStatusLastAttemptError" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptError: computeResizeRequest.ComputeResizeRequestStatusLastAttemptError = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrors <a name="ComputeResizeRequestStatusLastAttemptErrorErrors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrors: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetails: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage = { ... }
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo: computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo = { ... }
```


### ComputeResizeRequestTimeouts <a name="ComputeResizeRequestTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

const computeResizeRequestTimeouts: computeResizeRequest.ComputeResizeRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#create ComputeResizeRequest#create}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#delete ComputeResizeRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#create ComputeResizeRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_resize_request#delete ComputeResizeRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeResizeRequestRequestedRunDurationOutputReference <a name="ComputeResizeRequestRequestedRunDurationOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestRequestedRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```typescript
public readonly metadatas: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```typescript
public readonly links: ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails">ComputeResizeRequestStatusErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```typescript
public readonly errorInfo: ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help"></a>

```typescript
public readonly help: ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```typescript
public readonly localizedMessage: ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```typescript
public readonly quotaInfo: ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetails;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails">ComputeResizeRequestStatusErrorErrorsErrorDetails</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```typescript
public readonly futureLimit: number;
```

- *Type:* number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```typescript
public readonly rolloutStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeResizeRequestStatusErrorErrorsList <a name="ComputeResizeRequestStatusErrorErrorsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsOutputReference <a name="ComputeResizeRequestStatusErrorErrorsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList">ComputeResizeRequestStatusErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors">ComputeResizeRequestStatusErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails"></a>

```typescript
public readonly errorDetails: ComputeResizeRequestStatusErrorErrorsErrorDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList">ComputeResizeRequestStatusErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusErrorErrors;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors">ComputeResizeRequestStatusErrorErrors</a>

---


### ComputeResizeRequestStatusErrorList <a name="ComputeResizeRequestStatusErrorList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorOutputReference <a name="ComputeResizeRequestStatusErrorOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList">ComputeResizeRequestStatusErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError">ComputeResizeRequestStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.errors"></a>

```typescript
public readonly errors: ComputeResizeRequestStatusErrorErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList">ComputeResizeRequestStatusErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusError;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError">ComputeResizeRequestStatusError</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```typescript
public readonly metadatas: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```typescript
public readonly links: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```typescript
public readonly errorInfo: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help"></a>

```typescript
public readonly help: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```typescript
public readonly localizedMessage: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```typescript
public readonly quotaInfo: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```typescript
public readonly futureLimit: number;
```

- *Type:* number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```typescript
public readonly rolloutStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors">ComputeResizeRequestStatusLastAttemptErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails"></a>

```typescript
public readonly errorDetails: ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptErrorErrors;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors">ComputeResizeRequestStatusLastAttemptErrorErrors</a>

---


### ComputeResizeRequestStatusLastAttemptErrorList <a name="ComputeResizeRequestStatusLastAttemptErrorList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList">ComputeResizeRequestStatusLastAttemptErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError">ComputeResizeRequestStatusLastAttemptError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors"></a>

```typescript
public readonly errors: ComputeResizeRequestStatusLastAttemptErrorErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList">ComputeResizeRequestStatusLastAttemptErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttemptError;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError">ComputeResizeRequestStatusLastAttemptError</a>

---


### ComputeResizeRequestStatusLastAttemptList <a name="ComputeResizeRequestStatusLastAttemptList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusLastAttemptOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptOutputReference <a name="ComputeResizeRequestStatusLastAttemptOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList">ComputeResizeRequestStatusLastAttemptErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt">ComputeResizeRequestStatusLastAttempt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.error"></a>

```typescript
public readonly error: ComputeResizeRequestStatusLastAttemptErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList">ComputeResizeRequestStatusLastAttemptErrorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatusLastAttempt;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt">ComputeResizeRequestStatusLastAttempt</a>

---


### ComputeResizeRequestStatusList <a name="ComputeResizeRequestStatusList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get"></a>

```typescript
public get(index: number): ComputeResizeRequestStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeResizeRequestStatusOutputReference <a name="ComputeResizeRequestStatusOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList">ComputeResizeRequestStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.lastAttempt">lastAttempt</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList">ComputeResizeRequestStatusLastAttemptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus">ComputeResizeRequestStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.error"></a>

```typescript
public readonly error: ComputeResizeRequestStatusErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList">ComputeResizeRequestStatusErrorList</a>

---

##### `lastAttempt`<sup>Required</sup> <a name="lastAttempt" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.lastAttempt"></a>

```typescript
public readonly lastAttempt: ComputeResizeRequestStatusLastAttemptList;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList">ComputeResizeRequestStatusLastAttemptList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeResizeRequestStatus;
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus">ComputeResizeRequestStatus</a>

---


### ComputeResizeRequestTimeoutsOutputReference <a name="ComputeResizeRequestTimeoutsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeResizeRequest } from '@cdktf/provider-google'

new computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeResizeRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

---



