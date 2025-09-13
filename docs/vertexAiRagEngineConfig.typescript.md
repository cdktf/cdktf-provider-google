# `vertexAiRagEngineConfig` Submodule <a name="`vertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google.vertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagEngineConfig <a name="VertexAiRagEngineConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfig(scope: Construct, id: string, config: VertexAiRagEngineConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig">putRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRagManagedDbConfig` <a name="putRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```typescript
public putRagManagedDbConfig(value: VertexAiRagEngineConfigRagManagedDbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiRagEngineConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiRagEngineConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput">ragManagedDbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```typescript
public readonly ragManagedDbConfig: VertexAiRagEngineConfigRagManagedDbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiRagEngineConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ragManagedDbConfigInput`<sup>Optional</sup> <a name="ragManagedDbConfigInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```typescript
public readonly ragManagedDbConfigInput: VertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiRagEngineConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagEngineConfigConfig <a name="VertexAiRagEngineConfigConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigConfig: vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region">region</a></code> | <code>string</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```typescript
public readonly ragManagedDbConfig: VertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiRagEngineConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}

---

### VertexAiRagEngineConfigRagManagedDbConfig <a name="VertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigRagManagedDbConfig: vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```typescript
public readonly basic: VertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}

---

##### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```typescript
public readonly scaled: VertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}

---

##### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```typescript
public readonly unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}

---

### VertexAiRagEngineConfigRagManagedDbConfigBasic <a name="VertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigRagManagedDbConfigBasic: vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic = { ... }
```


### VertexAiRagEngineConfigRagManagedDbConfigScaled <a name="VertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigRagManagedDbConfigScaled: vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled = { ... }
```


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigRagManagedDbConfigUnprovisioned: vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = { ... }
```


### VertexAiRagEngineConfigTimeouts <a name="VertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

const vertexAiRagEngineConfigTimeouts: vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">putScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">putUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">resetScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">resetUnprovisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```typescript
public putBasic(value: VertexAiRagEngineConfigRagManagedDbConfigBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `putScaled` <a name="putScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```typescript
public putScaled(value: VertexAiRagEngineConfigRagManagedDbConfigScaled): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `putUnprovisioned` <a name="putUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```typescript
public putUnprovisioned(value: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetScaled` <a name="resetScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```typescript
public resetScaled(): void
```

##### `resetUnprovisioned` <a name="resetUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```typescript
public resetUnprovisioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">scaledInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">unprovisionedInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```typescript
public readonly basic: VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `scaled`<sup>Required</sup> <a name="scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```typescript
public readonly scaled: VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `unprovisioned`<sup>Required</sup> <a name="unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```typescript
public readonly unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```typescript
public readonly basicInput: VertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `scaledInput`<sup>Optional</sup> <a name="scaledInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```typescript
public readonly scaledInput: VertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `unprovisionedInput`<sup>Optional</sup> <a name="unprovisionedInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```typescript
public readonly unprovisionedInput: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### VertexAiRagEngineConfigTimeoutsOutputReference <a name="VertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiRagEngineConfig } from '@cdktf/provider-google'

new vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiRagEngineConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

---



