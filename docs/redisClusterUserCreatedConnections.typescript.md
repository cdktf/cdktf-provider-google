# `redisClusterUserCreatedConnections` Submodule <a name="`redisClusterUserCreatedConnections` Submodule" id="@cdktf/provider-google.redisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterUserCreatedConnections <a name="RedisClusterUserCreatedConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections(scope: Construct, id: string, config: RedisClusterUserCreatedConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig">RedisClusterUserCreatedConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig">RedisClusterUserCreatedConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints">putClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints">resetClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoints` <a name="putClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```typescript
public putClusterEndpoints(value: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts"></a>

```typescript
public putTimeouts(value: RedisClusterUserCreatedConnectionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `resetClusterEndpoints` <a name="resetClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```typescript
public resetClusterEndpoints(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisClusterUserCreatedConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints">clusterEndpoints</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput">clusterEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterEndpoints`<sup>Required</sup> <a name="clusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```typescript
public readonly clusterEndpoints: RedisClusterUserCreatedConnectionsClusterEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts"></a>

```typescript
public readonly timeouts: RedisClusterUserCreatedConnectionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `clusterEndpointsInput`<sup>Optional</sup> <a name="clusterEndpointsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```typescript
public readonly clusterEndpointsInput: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterUserCreatedConnectionsClusterEndpoints <a name="RedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

const redisClusterUserCreatedConnectionsClusterEndpoints: redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">connections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```typescript
public readonly connections: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#connections RedisClusterUserCreatedConnections#connections}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

const redisClusterUserCreatedConnectionsClusterEndpointsConnections: redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `pscConnection`<sup>Optional</sup> <a name="pscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```typescript
public readonly pscConnection: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#psc_connection RedisClusterUserCreatedConnections#psc_connection}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

const redisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection: redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">address</a></code> | <code>string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">projectId</a></code> | <code>string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#address RedisClusterUserCreatedConnections#address}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#forwarding_rule RedisClusterUserCreatedConnections#forwarding_rule}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#network RedisClusterUserCreatedConnections#network}

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#psc_connection_id RedisClusterUserCreatedConnections#psc_connection_id}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#service_attachment RedisClusterUserCreatedConnections#service_attachment}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#project_id RedisClusterUserCreatedConnections#project_id}

---

### RedisClusterUserCreatedConnectionsConfig <a name="RedisClusterUserCreatedConnectionsConfig" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

const redisClusterUserCreatedConnectionsConfig: redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name">name</a></code> | <code>string</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region">region</a></code> | <code>string</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">clusterEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#name RedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#region RedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```typescript
public readonly clusterEndpoints: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#cluster_endpoints RedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#timeouts RedisClusterUserCreatedConnections#timeouts}

---

### RedisClusterUserCreatedConnectionsTimeouts <a name="RedisClusterUserCreatedConnectionsTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

const redisClusterUserCreatedConnectionsTimeouts: redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```typescript
public get(index: number): RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">putPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">resetPscConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscConnection` <a name="putPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```typescript
public putPscConnection(value: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `resetPscConnection` <a name="resetPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```typescript
public resetPscConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">pscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscConnection`<sup>Required</sup> <a name="pscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```typescript
public readonly pscConnection: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `pscConnectionInput`<sup>Optional</sup> <a name="pscConnectionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```typescript
public readonly pscConnectionInput: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpointsConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```typescript
public readonly forwardingRuleInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```typescript
public readonly pscConnectionIdInput: string;
```

- *Type:* string

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```typescript
public readonly serviceAttachmentInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```typescript
public get(index: number): RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---


### RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```typescript
public putConnections(value: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpointsConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---

##### `resetConnections` <a name="resetConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```typescript
public resetConnections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```typescript
public readonly connections: RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterUserCreatedConnectionsClusterEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>

---


### RedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="RedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { redisClusterUserCreatedConnections } from '@cdktf/provider-google'

new redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---



