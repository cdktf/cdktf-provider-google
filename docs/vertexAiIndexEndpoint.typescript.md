# `vertexAiIndexEndpoint` Submodule <a name="`vertexAiIndexEndpoint` Submodule" id="@cdktf/provider-google.vertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndexEndpoint <a name="VertexAiIndexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

new vertexAiIndexEndpoint.VertexAiIndexEndpoint(scope: Construct, id: string, config: VertexAiIndexEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig">VertexAiIndexEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig">VertexAiIndexEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled">resetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```typescript
public putPrivateServiceConnectConfig(value: VertexAiIndexEndpointPrivateServiceConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiIndexEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```typescript
public resetPrivateServiceConnectConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicEndpointEnabled` <a name="resetPublicEndpointEnabled" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```typescript
public resetPublicEndpointEnabled(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiIndexEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VertexAiIndexEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiIndexEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName">publicEndpointDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput">publicEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `publicEndpointDomainName`<sup>Required</sup> <a name="publicEndpointDomainName" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```typescript
public readonly publicEndpointDomainName: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```typescript
public readonly privateServiceConnectConfigInput: VertexAiIndexEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicEndpointEnabledInput`<sup>Optional</sup> <a name="publicEndpointEnabledInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```typescript
public readonly publicEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiIndexEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publicEndpointEnabled`<sup>Required</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```typescript
public readonly publicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexEndpointConfig <a name="VertexAiIndexEndpointConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

const vertexAiIndexEndpointConfig: vertexAiIndexEndpoint.VertexAiIndexEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description">description</a></code> | <code>string</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network">network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region">region</a></code> | <code>string</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#display_name VertexAiIndexEndpoint#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#description VertexAiIndexEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#labels VertexAiIndexEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: VertexAiIndexEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#private_service_connect_config VertexAiIndexEndpoint#private_service_connect_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}.

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```typescript
public readonly publicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#public_endpoint_enabled VertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#region VertexAiIndexEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#timeouts VertexAiIndexEndpoint#timeouts}

---

### VertexAiIndexEndpointPrivateServiceConnectConfig <a name="VertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

const vertexAiIndexEndpointPrivateServiceConnectConfig: vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">projectAllowlist</a></code> | <code>string[]</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```typescript
public readonly enablePrivateServiceConnect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#enable_private_service_connect VertexAiIndexEndpoint#enable_private_service_connect}

---

##### `projectAllowlist`<sup>Optional</sup> <a name="projectAllowlist" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```typescript
public readonly projectAllowlist: string[];
```

- *Type:* string[]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#project_allowlist VertexAiIndexEndpoint#project_allowlist}

---

### VertexAiIndexEndpointTimeouts <a name="VertexAiIndexEndpointTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

const vertexAiIndexEndpointTimeouts: vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

new vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">resetProjectAllowlist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectAllowlist` <a name="resetProjectAllowlist" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```typescript
public resetProjectAllowlist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enablePrivateServiceConnectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">projectAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">projectAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enablePrivateServiceConnectInput`<sup>Optional</sup> <a name="enablePrivateServiceConnectInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```typescript
public readonly enablePrivateServiceConnectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectAllowlistInput`<sup>Optional</sup> <a name="projectAllowlistInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```typescript
public readonly projectAllowlistInput: string[];
```

- *Type:* string[]

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```typescript
public readonly enablePrivateServiceConnect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectAllowlist`<sup>Required</sup> <a name="projectAllowlist" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```typescript
public readonly projectAllowlist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### VertexAiIndexEndpointTimeoutsOutputReference <a name="VertexAiIndexEndpointTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpoint } from '@cdktf/provider-google'

new vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiIndexEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---



