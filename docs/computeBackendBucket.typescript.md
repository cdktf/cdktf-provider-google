# `computeBackendBucket` Submodule <a name="`computeBackendBucket` Submodule" id="@cdktf/provider-google.computeBackendBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucket <a name="ComputeBackendBucket" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket google_compute_backend_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucket(scope: Construct, id: string, config: ComputeBackendBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig">ComputeBackendBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig">ComputeBackendBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy"></a>

```typescript
public putCdnPolicy(value: ComputeBackendBucketCdnPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeBackendBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

---

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy"></a>

```typescript
public resetCdnPolicy(): void
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode"></a>

```typescript
public resetCompressionMode(): void
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders"></a>

```typescript
public resetCustomResponseHeaders(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy"></a>

```typescript
public resetEdgeSecurityPolicy(): void
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn"></a>

```typescript
public resetEnableCdn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBackendBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

computeBackendBucket.ComputeBackendBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

computeBackendBucket.ComputeBackendBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

computeBackendBucket.ComputeBackendBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

computeBackendBucket.ComputeBackendBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeBackendBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeBackendBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeBackendBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput">compressionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput">enableCdnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode">compressionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: ComputeBackendBucketCdnPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput"></a>

```typescript
public readonly cdnPolicyInput: ComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput"></a>

```typescript
public readonly compressionModeInput: string;
```

- *Type:* string

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput"></a>

```typescript
public readonly customResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput"></a>

```typescript
public readonly edgeSecurityPolicyInput: string;
```

- *Type:* string

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput"></a>

```typescript
public readonly enableCdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeBackendBucketTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketCdnPolicy <a name="ComputeBackendBucketCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketCdnPolicy: computeBackendBucket.ComputeBackendBucketCdnPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh. |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: IResolvable | ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#bypass_cache_on_request_headers ComputeBackendBucket#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: ComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#cache_key_policy ComputeBackendBucket#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#cache_mode ComputeBackendBucket#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#client_ttl ComputeBackendBucket#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#default_ttl ComputeBackendBucket#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#max_ttl ComputeBackendBucket#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#negative_caching ComputeBackendBucket#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: IResolvable | ComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#negative_caching_policy ComputeBackendBucket#negative_caching_policy}

---

##### `requestCoalescing`<sup>Optional</sup> <a name="requestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#request_coalescing ComputeBackendBucket#request_coalescing}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#serve_while_stale ComputeBackendBucket#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}

---

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketCdnPolicyBypassCacheOnRequestHeaders: computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#header_name ComputeBackendBucket#header_name}

---

### ComputeBackendBucketCdnPolicyCacheKeyPolicy <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketCdnPolicyCacheKeyPolicy: computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. |

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#include_http_headers ComputeBackendBucket#include_http_headers}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#query_string_whitelist ComputeBackendBucket#query_string_whitelist}

---

### ComputeBackendBucketCdnPolicyNegativeCachingPolicy <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketCdnPolicyNegativeCachingPolicy: computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#code ComputeBackendBucket#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#ttl ComputeBackendBucket#ttl}

---

### ComputeBackendBucketConfig <a name="ComputeBackendBucketConfig" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketConfig: computeBackendBucket.ComputeBackendBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode">compressionMode</a></code> | <code>string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description">description</a></code> | <code>string</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#bucket_name ComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#name ComputeBackendBucket#name}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: ComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#cdn_policy ComputeBackendBucket#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#compression_mode ComputeBackendBucket#compression_mode}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#custom_response_headers ComputeBackendBucket#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#description ComputeBackendBucket#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#edge_security_policy ComputeBackendBucket#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#enable_cdn ComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendBucketTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#timeouts ComputeBackendBucket#timeouts}

---

### ComputeBackendBucketTimeouts <a name="ComputeBackendBucketTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

const computeBackendBucketTimeouts: computeBackendBucket.ComputeBackendBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#create ComputeBackendBucket#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#delete ComputeBackendBucket#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#update ComputeBackendBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#create ComputeBackendBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#delete ComputeBackendBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_backend_bucket#update ComputeBackendBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```typescript
public get(index: number): ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---


### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>

---


### ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```typescript
public resetIncludeHttpHeaders(): void
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```typescript
public resetQueryStringWhitelist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```typescript
public readonly includeHttpHeadersInput: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```typescript
public readonly queryStringWhitelistInput: string[];
```

- *Type:* string[]

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get"></a>

```typescript
public get(index: number): ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketCdnPolicyNegativeCachingPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>

---


### ComputeBackendBucketCdnPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing">resetRequestCoalescing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```typescript
public putBypassCacheOnRequestHeaders(value: IResolvable | ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```typescript
public putCacheKeyPolicy(value: ComputeBackendBucketCdnPolicyCacheKeyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```typescript
public putNegativeCachingPolicy(value: IResolvable | ComputeBackendBucketCdnPolicyNegativeCachingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```typescript
public resetBypassCacheOnRequestHeaders(): void
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```typescript
public resetCacheKeyPolicy(): void
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode"></a>

```typescript
public resetCacheMode(): void
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl"></a>

```typescript
public resetClientTtl(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching"></a>

```typescript
public resetNegativeCaching(): void
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```typescript
public resetNegativeCachingPolicy(): void
```

##### `resetRequestCoalescing` <a name="resetRequestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing"></a>

```typescript
public resetRequestCoalescing(): void
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale"></a>

```typescript
public resetServeWhileStale(): void
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```typescript
public resetSignedUrlCacheMaxAgeSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput">requestCoalescingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: ComputeBackendBucketCdnPolicyNegativeCachingPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```typescript
public readonly bypassCacheOnRequestHeadersInput: IResolvable | ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```typescript
public readonly cacheKeyPolicyInput: ComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput"></a>

```typescript
public readonly cacheModeInput: string;
```

- *Type:* string

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput"></a>

```typescript
public readonly clientTtlInput: number;
```

- *Type:* number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput"></a>

```typescript
public readonly negativeCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```typescript
public readonly negativeCachingPolicyInput: IResolvable | ComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---

##### `requestCoalescingInput`<sup>Optional</sup> <a name="requestCoalescingInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```typescript
public readonly requestCoalescingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```typescript
public readonly serveWhileStaleInput: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```typescript
public readonly signedUrlCacheMaxAgeSecInput: number;
```

- *Type:* number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestCoalescing`<sup>Required</sup> <a name="requestCoalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---


### ComputeBackendBucketTimeoutsOutputReference <a name="ComputeBackendBucketTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeBackendBucket } from '@cdktf/provider-google'

new computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

---



