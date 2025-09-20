# `computeRegionSslCertificate` Submodule <a name="`computeRegionSslCertificate` Submodule" id="@cdktf/provider-google.computeRegionSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSslCertificate <a name="ComputeRegionSslCertificate" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate google_compute_region_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

new computeRegionSslCertificate.ComputeRegionSslCertificate(scope: Construct, id: string, config: ComputeRegionSslCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig">ComputeRegionSslCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig">ComputeRegionSslCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionSslCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionSslCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionSslCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionSslCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId">certificateId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: number;
```

- *Type:* number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionSslCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionSslCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSslCertificateConfig <a name="ComputeRegionSslCertificateConfig" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.Initializer"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

const computeRegionSslCertificateConfig: computeRegionSslCertificate.ComputeRegionSslCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | The certificate in PEM format. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#certificate ComputeRegionSslCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#private_key ComputeRegionSslCertificate#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#description ComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name"></a>

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

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#name ComputeRegionSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#name_prefix ComputeRegionSslCertificate#name_prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#region ComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionSslCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#timeouts ComputeRegionSslCertificate#timeouts}

---

### ComputeRegionSslCertificateTimeouts <a name="ComputeRegionSslCertificateTimeouts" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.Initializer"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

const computeRegionSslCertificateTimeouts: computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSslCertificateTimeoutsOutputReference <a name="ComputeRegionSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionSslCertificate } from '@cdktf/provider-google'

new computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSslCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---



