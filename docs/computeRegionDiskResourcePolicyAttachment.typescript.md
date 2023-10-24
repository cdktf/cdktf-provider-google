# `google_compute_region_disk_resource_policy_attachment`

Refer to the Terraform Registory for docs: [`google_compute_region_disk_resource_policy_attachment`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment).

# `computeRegionDiskResourcePolicyAttachment` Submodule <a name="`computeRegionDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionDiskResourcePolicyAttachment <a name="ComputeRegionDiskResourcePolicyAttachment" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment google_compute_region_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

new computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment(scope: Construct, id: string, config: ComputeRegionDiskResourcePolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig">ComputeRegionDiskResourcePolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig">ComputeRegionDiskResourcePolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionDiskResourcePolicyAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionDiskResourcePolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionDiskResourcePolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionDiskResourcePolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionDiskResourcePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionDiskResourcePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.diskInput">diskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.diskInput"></a>

```typescript
public readonly diskInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionDiskResourcePolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionDiskResourcePolicyAttachmentConfig <a name="ComputeRegionDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.Initializer"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

const computeRegionDiskResourcePolicyAttachmentConfig: computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.disk">disk</a></code> | <code>string</code> | The name of the regional disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.name">name</a></code> | <code>string</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#id ComputeRegionDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#project ComputeRegionDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

The name of the regional disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#disk ComputeRegionDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#name ComputeRegionDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#id ComputeRegionDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#project ComputeRegionDiskResourcePolicyAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#region ComputeRegionDiskResourcePolicyAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionDiskResourcePolicyAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#timeouts ComputeRegionDiskResourcePolicyAttachment#timeouts}

---

### ComputeRegionDiskResourcePolicyAttachmentTimeouts <a name="ComputeRegionDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

const computeRegionDiskResourcePolicyAttachmentTimeouts: computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#create ComputeRegionDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#delete ComputeRegionDiskResourcePolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#create ComputeRegionDiskResourcePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/compute_region_disk_resource_policy_attachment#delete ComputeRegionDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionDiskResourcePolicyAttachment } from '@cdktf/provider-google'

new computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionDiskResourcePolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

---



