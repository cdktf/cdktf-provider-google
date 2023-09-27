# `google_healthcare_consent_store`

Refer to the Terraform Registory for docs: [`google_healthcare_consent_store`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store).

# `healthcareConsentStore` Submodule <a name="`healthcareConsentStore` Submodule" id="@cdktf/provider-google.healthcareConsentStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareConsentStore <a name="HealthcareConsentStore" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store google_healthcare_consent_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

new healthcareConsentStore.HealthcareConsentStore(scope: Construct, id: string, config: HealthcareConsentStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig">HealthcareConsentStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig">HealthcareConsentStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDefaultConsentTtl">resetDefaultConsentTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetEnableConsentCreateOnUpdate">resetEnableConsentCreateOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareConsentStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---

##### `resetDefaultConsentTtl` <a name="resetDefaultConsentTtl" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDefaultConsentTtl"></a>

```typescript
public resetDefaultConsentTtl(): void
```

##### `resetEnableConsentCreateOnUpdate` <a name="resetEnableConsentCreateOnUpdate" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetEnableConsentCreateOnUpdate"></a>

```typescript
public resetEnableConsentCreateOnUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

healthcareConsentStore.HealthcareConsentStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

healthcareConsentStore.HealthcareConsentStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

healthcareConsentStore.HealthcareConsentStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference">HealthcareConsentStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtlInput">defaultConsentTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdateInput">enableConsentCreateOnUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtl">defaultConsentTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdate">enableConsentCreateOnUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareConsentStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference">HealthcareConsentStoreTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `defaultConsentTtlInput`<sup>Optional</sup> <a name="defaultConsentTtlInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtlInput"></a>

```typescript
public readonly defaultConsentTtlInput: string;
```

- *Type:* string

---

##### `enableConsentCreateOnUpdateInput`<sup>Optional</sup> <a name="enableConsentCreateOnUpdateInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdateInput"></a>

```typescript
public readonly enableConsentCreateOnUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareConsentStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `defaultConsentTtl`<sup>Required</sup> <a name="defaultConsentTtl" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtl"></a>

```typescript
public readonly defaultConsentTtl: string;
```

- *Type:* string

---

##### `enableConsentCreateOnUpdate`<sup>Required</sup> <a name="enableConsentCreateOnUpdate" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdate"></a>

```typescript
public readonly enableConsentCreateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareConsentStoreConfig <a name="HealthcareConsentStoreConfig" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

const healthcareConsentStoreConfig: healthcareConsentStore.HealthcareConsentStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.name">name</a></code> | <code>string</code> | The name of this ConsentStore, for example: "consent1". |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.defaultConsentTtl">defaultConsentTtl</a></code> | <code>string</code> | Default time to live for consents in this store. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate">enableConsentCreateOnUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#id HealthcareConsentStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize Consent stores. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#dataset HealthcareConsentStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this ConsentStore, for example: "consent1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#name HealthcareConsentStore#name}

---

##### `defaultConsentTtl`<sup>Optional</sup> <a name="defaultConsentTtl" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.defaultConsentTtl"></a>

```typescript
public readonly defaultConsentTtl: string;
```

- *Type:* string

Default time to live for consents in this store.

Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#default_consent_ttl HealthcareConsentStore#default_consent_ttl}

---

##### `enableConsentCreateOnUpdate`<sup>Optional</sup> <a name="enableConsentCreateOnUpdate" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate"></a>

```typescript
public readonly enableConsentCreateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#enable_consent_create_on_update HealthcareConsentStore#enable_consent_create_on_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#id HealthcareConsentStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize Consent stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}'

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}\p{N}_-]{0,63}'

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#labels HealthcareConsentStore#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareConsentStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#timeouts HealthcareConsentStore#timeouts}

---

### HealthcareConsentStoreTimeouts <a name="HealthcareConsentStoreTimeouts" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

const healthcareConsentStoreTimeouts: healthcareConsentStore.HealthcareConsentStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#create HealthcareConsentStore#create}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#delete HealthcareConsentStore#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#update HealthcareConsentStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#create HealthcareConsentStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#delete HealthcareConsentStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/healthcare_consent_store#update HealthcareConsentStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareConsentStoreTimeoutsOutputReference <a name="HealthcareConsentStoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktf/provider-google'

new healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareConsentStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---



