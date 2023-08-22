# `google_compute_packet_mirroring`

Refer to the Terraform Registory for docs: [`google_compute_packet_mirroring`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring).

# `computePacketMirroring` Submodule <a name="`computePacketMirroring` Submodule" id="@cdktf/provider-google.computePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePacketMirroring <a name="ComputePacketMirroring" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroring(scope: Construct, id: string, config: ComputePacketMirroringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig">ComputePacketMirroringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig">ComputePacketMirroringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb">putCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources">putMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCollectorIlb` <a name="putCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb"></a>

```typescript
public putCollectorIlb(value: ComputePacketMirroringCollectorIlb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter"></a>

```typescript
public putFilter(value: ComputePacketMirroringFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `putMirroredResources` <a name="putMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources"></a>

```typescript
public putMirroredResources(value: ComputePacketMirroringMirroredResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork"></a>

```typescript
public putNetwork(value: ComputePacketMirroringNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputePacketMirroringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

computePacketMirroring.ComputePacketMirroring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

computePacketMirroring.ComputePacketMirroring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

computePacketMirroring.ComputePacketMirroring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput">collectorIlbInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput">mirroredResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb"></a>

```typescript
public readonly collectorIlb: ComputePacketMirroringCollectorIlbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter"></a>

```typescript
public readonly filter: ComputePacketMirroringFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a>

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources"></a>

```typescript
public readonly mirroredResources: ComputePacketMirroringMirroredResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network"></a>

```typescript
public readonly network: ComputePacketMirroringNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePacketMirroringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a>

---

##### `collectorIlbInput`<sup>Optional</sup> <a name="collectorIlbInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput"></a>

```typescript
public readonly collectorIlbInput: ComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput"></a>

```typescript
public readonly filterInput: ComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mirroredResourcesInput`<sup>Optional</sup> <a name="mirroredResourcesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput"></a>

```typescript
public readonly mirroredResourcesInput: ComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput"></a>

```typescript
public readonly networkInput: ComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputePacketMirroringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePacketMirroringCollectorIlb <a name="ComputePacketMirroringCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringCollectorIlb: computePacketMirroring.ComputePacketMirroringCollectorIlb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url">url</a></code> | <code>string</code> | The URL of the forwarding rule. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringConfig <a name="ComputePacketMirroringConfig" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringConfig: computePacketMirroring.ComputePacketMirroringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name">name</a></code> | <code>string</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority">priority</a></code> | <code>number</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb"></a>

```typescript
public readonly collectorIlb: ComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources"></a>

```typescript
public readonly mirroredResources: ComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network"></a>

```typescript
public readonly network: ComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter"></a>

```typescript
public readonly filter: ComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePacketMirroringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

### ComputePacketMirroringFilter <a name="ComputePacketMirroringFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringFilter: computePacketMirroring.ComputePacketMirroringFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `cidrRanges`<sup>Optional</sup> <a name="cidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#direction ComputePacketMirroring#direction}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}

---

### ComputePacketMirroringMirroredResources <a name="ComputePacketMirroringMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringMirroredResources: computePacketMirroring.ComputePacketMirroringMirroredResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances">instances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]</code> | instances block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks">subnetworks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags">tags</a></code> | <code>string[]</code> | All instances with these tags will be mirrored. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances"></a>

```typescript
public readonly instances: IResolvable | ComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#instances ComputePacketMirroring#instances}

---

##### `subnetworks`<sup>Optional</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks"></a>

```typescript
public readonly subnetworks: IResolvable | ComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#tags ComputePacketMirroring#tags}

---

### ComputePacketMirroringMirroredResourcesInstances <a name="ComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringMirroredResourcesInstances: computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url">url</a></code> | <code>string</code> | The URL of the instances where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringMirroredResourcesSubnetworks <a name="ComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringMirroredResourcesSubnetworks: computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url">url</a></code> | <code>string</code> | The URL of the subnetwork where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringNetwork <a name="ComputePacketMirroringNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringNetwork: computePacketMirroring.ComputePacketMirroringNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url">url</a></code> | <code>string</code> | The full self_link URL of the network where this rule is active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringTimeouts <a name="ComputePacketMirroringTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

const computePacketMirroringTimeouts: computePacketMirroring.ComputePacketMirroringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePacketMirroringCollectorIlbOutputReference <a name="ComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---


### ComputePacketMirroringFilterOutputReference <a name="ComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges">resetCidrRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrRanges` <a name="resetCidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```typescript
public resetCidrRanges(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```typescript
public resetIpProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput">cidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangesInput`<sup>Optional</sup> <a name="cidrRangesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```typescript
public readonly cidrRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```typescript
public readonly ipProtocolsInput: string[];
```

- *Type:* string[]

---

##### `cidrRanges`<sup>Required</sup> <a name="cidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---


### ComputePacketMirroringMirroredResourcesInstancesList <a name="ComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```typescript
public get(index: number): ComputePacketMirroringMirroredResourcesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]

---


### ComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="ComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePacketMirroringMirroredResourcesInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>

---


### ComputePacketMirroringMirroredResourcesOutputReference <a name="ComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">putSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">resetSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```typescript
public putInstances(value: IResolvable | ComputePacketMirroringMirroredResourcesInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]

---

##### `putSubnetworks` <a name="putSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```typescript
public putSubnetworks(value: IResolvable | ComputePacketMirroringMirroredResourcesSubnetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetSubnetworks` <a name="resetSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```typescript
public resetSubnetworks(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">subnetworks</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">instancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">subnetworksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```typescript
public readonly instances: ComputePacketMirroringMirroredResourcesInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```typescript
public readonly subnetworks: ComputePacketMirroringMirroredResourcesSubnetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: IResolvable | ComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>[]

---

##### `subnetworksInput`<sup>Optional</sup> <a name="subnetworksInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```typescript
public readonly subnetworksInput: IResolvable | ComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---


### ComputePacketMirroringMirroredResourcesSubnetworksList <a name="ComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```typescript
public get(index: number): ComputePacketMirroringMirroredResourcesSubnetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---


### ComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="ComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePacketMirroringMirroredResourcesSubnetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>

---


### ComputePacketMirroringNetworkOutputReference <a name="ComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---


### ComputePacketMirroringTimeoutsOutputReference <a name="ComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```typescript
import { computePacketMirroring } from '@cdktf/provider-google'

new computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePacketMirroringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---



