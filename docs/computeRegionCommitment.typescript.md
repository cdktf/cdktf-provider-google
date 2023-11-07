# `google_compute_region_commitment`

Refer to the Terraform Registory for docs: [`google_compute_region_commitment`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment).

# `computeRegionCommitment` Submodule <a name="`computeRegionCommitment` Submodule" id="@cdktf/provider-google.computeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCommitment <a name="ComputeRegionCommitment" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

new computeRegionCommitment.ComputeRegionCommitment(scope: Construct, id: string, config: ComputeRegionCommitmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig">ComputeRegionCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig">ComputeRegionCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource">putLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource">resetLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putLicenseResource` <a name="putLicenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource"></a>

```typescript
public putLicenseResource(value: ComputeRegionCommitmentLicenseResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources"></a>

```typescript
public putResources(value: IResolvable | ComputeRegionCommitmentResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionCommitmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseResource` <a name="resetLicenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource"></a>

```typescript
public resetLicenseResource(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

computeRegionCommitment.ComputeRegionCommitment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

computeRegionCommitment.ComputeRegionCommitment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

computeRegionCommitment.ComputeRegionCommitment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId">commitmentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput">licenseResourceInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput">resourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId"></a>

```typescript
public readonly commitmentId: number;
```

- *Type:* number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

---

##### `licenseResource`<sup>Required</sup> <a name="licenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource"></a>

```typescript
public readonly licenseResource: ComputeRegionCommitmentLicenseResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources"></a>

```typescript
public readonly resources: ComputeRegionCommitmentResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionCommitmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseResourceInput`<sup>Optional</sup> <a name="licenseResourceInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput"></a>

```typescript
public readonly licenseResourceInput: ComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | ComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCommitmentConfig <a name="ComputeRegionCommitmentConfig" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

const computeRegionCommitmentConfig: computeRegionCommitment.ComputeRegionCommitmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>string</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category">category</a></code> | <code>string</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region">region</a></code> | <code>string</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]</code> | resources block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type">type</a></code> | <code>string</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#name ComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#plan ComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#auto_renew ComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#category ComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#description ComputeRegionCommitment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource"></a>

```typescript
public readonly licenseResource: ComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#license_resource ComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#region ComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | ComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#resources ComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionCommitmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#timeouts ComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentLicenseResource <a name="ComputeRegionCommitmentLicenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

const computeRegionCommitmentLicenseResource: computeRegionCommitment.ComputeRegionCommitmentLicenseResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>string</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>string</code> | The number of licenses purchased. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense">coresPerLicense</a></code> | <code>string</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#license ComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `coresPerLicense`<sup>Optional</sup> <a name="coresPerLicense" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```typescript
public readonly coresPerLicense: string;
```

- *Type:* string

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#cores_per_license ComputeRegionCommitment#cores_per_license}

---

### ComputeRegionCommitmentResources <a name="ComputeRegionCommitmentResources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

const computeRegionCommitmentResources: computeRegionCommitment.ComputeRegionCommitmentResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>string</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type">type</a></code> | <code>string</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#accelerator_type ComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentTimeouts <a name="ComputeRegionCommitmentTimeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

const computeRegionCommitmentTimeouts: computeRegionCommitment.ComputeRegionCommitmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCommitmentLicenseResourceOutputReference <a name="ComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

new computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">resetCoresPerLicense</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetCoresPerLicense` <a name="resetCoresPerLicense" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```typescript
public resetCoresPerLicense(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">coresPerLicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">licenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">coresPerLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: string;
```

- *Type:* string

---

##### `coresPerLicenseInput`<sup>Optional</sup> <a name="coresPerLicenseInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```typescript
public readonly coresPerLicenseInput: string;
```

- *Type:* string

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```typescript
public readonly licenseInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `coresPerLicense`<sup>Required</sup> <a name="coresPerLicense" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```typescript
public readonly coresPerLicense: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---


### ComputeRegionCommitmentResourcesList <a name="ComputeRegionCommitmentResourcesList" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

new computeRegionCommitment.ComputeRegionCommitmentResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get"></a>

```typescript
public get(index: number): ComputeRegionCommitmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>[]

---


### ComputeRegionCommitmentResourcesOutputReference <a name="ComputeRegionCommitmentResourcesOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

new computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetAmount` <a name="resetAmount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput">amountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionCommitmentResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>

---


### ComputeRegionCommitmentTimeoutsOutputReference <a name="ComputeRegionCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionCommitment } from '@cdktf/provider-google'

new computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---



