# `cloudbuildWorkerPool` Submodule <a name="`cloudbuildWorkerPool` Submodule" id="@cdktf/provider-google.cloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildWorkerPool <a name="CloudbuildWorkerPool" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

new cloudbuildWorkerPool.CloudbuildWorkerPool(scope: Construct, id: string, config: CloudbuildWorkerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig">CloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig">CloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect">putPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig">putWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetPrivateServiceConnect">resetPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetWorkerConfig">resetWorkerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: CloudbuildWorkerPoolNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---

##### `putPrivateServiceConnect` <a name="putPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect"></a>

```typescript
public putPrivateServiceConnect(value: CloudbuildWorkerPoolPrivateServiceConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudbuildWorkerPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---

##### `putWorkerConfig` <a name="putWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig"></a>

```typescript
public putWorkerConfig(value: CloudbuildWorkerPoolWorkerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetPrivateServiceConnect` <a name="resetPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetPrivateServiceConnect"></a>

```typescript
public resetPrivateServiceConnect(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkerConfig` <a name="resetWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetWorkerConfig"></a>

```typescript
public resetWorkerConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudbuildWorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudbuildWorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference">CloudbuildWorkerPoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference">CloudbuildWorkerPoolPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference">CloudbuildWorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference">CloudbuildWorkerPoolWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnectInput">privateServiceConnectInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfigInput">workerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfig"></a>

```typescript
public readonly networkConfig: CloudbuildWorkerPoolNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference">CloudbuildWorkerPoolNetworkConfigOutputReference</a>

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: CloudbuildWorkerPoolPrivateServiceConnectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference">CloudbuildWorkerPoolPrivateServiceConnectOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeouts"></a>

```typescript
public readonly timeouts: CloudbuildWorkerPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference">CloudbuildWorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfig"></a>

```typescript
public readonly workerConfig: CloudbuildWorkerPoolWorkerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference">CloudbuildWorkerPoolWorkerConfigOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: CloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---

##### `privateServiceConnectInput`<sup>Optional</sup> <a name="privateServiceConnectInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnectInput"></a>

```typescript
public readonly privateServiceConnectInput: CloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudbuildWorkerPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---

##### `workerConfigInput`<sup>Optional</sup> <a name="workerConfigInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfigInput"></a>

```typescript
public readonly workerConfigInput: CloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildWorkerPoolConfig <a name="CloudbuildWorkerPoolConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

const cloudbuildWorkerPoolConfig: cloudbuildWorkerPool.CloudbuildWorkerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#location CloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#name CloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#annotations CloudbuildWorkerPool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#display_name CloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: CloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#network_config CloudbuildWorkerPool#network_config}

---

##### `privateServiceConnect`<sup>Optional</sup> <a name="privateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: CloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#private_service_connect CloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#project CloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudbuildWorkerPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#timeouts CloudbuildWorkerPool#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.workerConfig"></a>

```typescript
public readonly workerConfig: CloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#worker_config CloudbuildWorkerPool#worker_config}

---

### CloudbuildWorkerPoolNetworkConfig <a name="CloudbuildWorkerPoolNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

const cloudbuildWorkerPoolNetworkConfig: cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetwork">peeredNetwork</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>string</code> | Optional. |

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetwork"></a>

```typescript
public readonly peeredNetwork: string;
```

- *Type:* string

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#peered_network CloudbuildWorkerPool#peered_network}

---

##### `peeredNetworkIpRange`<sup>Optional</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange"></a>

```typescript
public readonly peeredNetworkIpRange: string;
```

- *Type:* string

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#peered_network_ip_range CloudbuildWorkerPool#peered_network_ip_range}

---

### CloudbuildWorkerPoolPrivateServiceConnect <a name="CloudbuildWorkerPoolPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

const cloudbuildWorkerPoolPrivateServiceConnect: cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic">routeAllTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Immutable. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#network_attachment CloudbuildWorkerPool#network_attachment}

---

##### `routeAllTraffic`<sup>Optional</sup> <a name="routeAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic"></a>

```typescript
public readonly routeAllTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#route_all_traffic CloudbuildWorkerPool#route_all_traffic}

---

### CloudbuildWorkerPoolTimeouts <a name="CloudbuildWorkerPoolTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

const cloudbuildWorkerPoolTimeouts: cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#create CloudbuildWorkerPool#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#delete CloudbuildWorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#update CloudbuildWorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#create CloudbuildWorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#delete CloudbuildWorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#update CloudbuildWorkerPool#update}.

---

### CloudbuildWorkerPoolWorkerConfig <a name="CloudbuildWorkerPoolWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

const cloudbuildWorkerPoolWorkerConfig: cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Size of the disk attached to the worker, in GB. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.machineType">machineType</a></code> | <code>string</code> | Machine type of a worker, such as `n1-standard-1`. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.noExternalIp">noExternalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, workers are created without any public address, which prevents network egress to public IPs. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#disk_size_gb CloudbuildWorkerPool#disk_size_gb}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#machine_type CloudbuildWorkerPool#machine_type}

---

##### `noExternalIp`<sup>Optional</sup> <a name="noExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.noExternalIp"></a>

```typescript
public readonly noExternalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/cloudbuild_worker_pool#no_external_ip CloudbuildWorkerPool#no_external_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildWorkerPoolNetworkConfigOutputReference <a name="CloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

new cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange">resetPeeredNetworkIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeeredNetworkIpRange` <a name="resetPeeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange"></a>

```typescript
public resetPeeredNetworkIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput">peeredNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput">peeredNetworkIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peeredNetworkInput`<sup>Optional</sup> <a name="peeredNetworkInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput"></a>

```typescript
public readonly peeredNetworkInput: string;
```

- *Type:* string

---

##### `peeredNetworkIpRangeInput`<sup>Optional</sup> <a name="peeredNetworkIpRangeInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput"></a>

```typescript
public readonly peeredNetworkIpRangeInput: string;
```

- *Type:* string

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```typescript
public readonly peeredNetwork: string;
```

- *Type:* string

---

##### `peeredNetworkIpRange`<sup>Required</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```typescript
public readonly peeredNetworkIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---


### CloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="CloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

new cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic">resetRouteAllTraffic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRouteAllTraffic` <a name="resetRouteAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic"></a>

```typescript
public resetRouteAllTraffic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput">routeAllTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">routeAllTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `routeAllTrafficInput`<sup>Optional</sup> <a name="routeAllTrafficInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput"></a>

```typescript
public readonly routeAllTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `routeAllTraffic`<sup>Required</sup> <a name="routeAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```typescript
public readonly routeAllTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---


### CloudbuildWorkerPoolTimeoutsOutputReference <a name="CloudbuildWorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

new cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudbuildWorkerPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---


### CloudbuildWorkerPoolWorkerConfigOutputReference <a name="CloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildWorkerPool } from '@cdktf/provider-google'

new cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp">resetNoExternalIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetNoExternalIp` <a name="resetNoExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp"></a>

```typescript
public resetNoExternalIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput">noExternalIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">noExternalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `noExternalIpInput`<sup>Optional</sup> <a name="noExternalIpInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput"></a>

```typescript
public readonly noExternalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `noExternalIp`<sup>Required</sup> <a name="noExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```typescript
public readonly noExternalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---



